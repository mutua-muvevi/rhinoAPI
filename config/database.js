const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log("Connected to the Database")
		
	} catch (error) {
		console.log(`Database Connection Error : ${error}`)
	}
}

module.exports = connectDB