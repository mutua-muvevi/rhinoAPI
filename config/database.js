const mongoose = require("mongoose");
const logger = require("../utils/logger");

const connectDB = () => {
	try {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		logger.info("Connected to the Database")
		
	} catch (err) {
		logger.error(`Database Connection Error : ${err}`)
	}
}

module.exports = connectDB