// node modules import
require("dotenv").config({path: "./config.env"});
const express = require("express");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require("helmet");
const hpp = require("hpp");

// constom modules import
const connectDB = require("./config/database");
const errorHandler = require("./middleware/error");


// runing/initialization of the imported
const app = express()

// initializing database
connectDB()

// initializing api limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	message: 'Too many requests from this IP, please try again in 15 minutes!',
})

// express middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp())
app.use(limiter);
app.use(mongoSanitize());
app.use(xss())
app.use("/api/user", require("./routes/user"));
app.use("/api/shipping", require("./routes/shipping"));
app.use("/api/email", require("./routes/email"));
app.use("/api/quotation", require("./routes/quotation"));
app.use("/api/storagequotation", require("./routes/storagequotation"));
app.use("/api/shipmentquotation", require("./routes/shipmentquotation"));
app.use("/api/productquotation", require("./routes/productquotation"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/storage", require("./routes/storage"));


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