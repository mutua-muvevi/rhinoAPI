const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
	transports:[
		new transports.Console({
			format:format.combine(
				format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
				format.align(),
				format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
			)
		}),

		new transports.File({
		filename: 'logs/server.log',
		level: 'info',
		format:format.combine(
			format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
			format.align(),
			format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
		)}),

		// new transports.MongoDB({
		// 	level: 'error',
		// 	db : process.env.MONGO_URI_LOGS,
		// 	options: {
		// 		useUnifiedTopology: true
		// 	},
		// 	collection: 'Server Logs',
		// 	format: format.combine(
		// 		format.timestamp(),
		// 		format.json()
		// 	)
		// })
	]
});