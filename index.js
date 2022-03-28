// node modules import
require("dotenv").config({path: "./config.env"});
const express = require("express");
const cors = require("cors")

// constom modules import
const connectDB = require("./config/database");
const errorHandler = require("./middleware/error");


// runing/initialization of the imported
const app = express()

connectDB()

// express middlewares
app.use(express.json());
app.use(cors());
app.use("/api/user", require("./routes/user"));
app.use("/api/shipping", require("./routes/shipping"));
app.use("/api/email", require("./routes/email"));
app.use("/api/quotation", require("./routes/quotation"));
app.use("/api/storagequotation", require("./routes/storagequotation"));
app.use("/api/shipmentquotation", require("./routes/shipmentquotation"));
app.use("/api/productquotation", require("./routes/productquotation"));
app.use("/api/contact", require("./routes/contact"));


// error middle ware
app.use(errorHandler);

// port connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Connected to port ${PORT}`))


// process termination after unhandles promise rejection
process.on("unhandledRejection", (error, promise) => {
	if(error){
		console.log("Unhandled Promise Rejection Error", error)
		process.exit(1)
	} else {
		console.log("Unhandled Promise Rejection Promise", promise)
	}
})