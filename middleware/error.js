const ErrorResponse = require("../utils/errorResponse")

// the error middleware that catches errors
const errorHandler = (err, req, res, next) => {
	let error = {...err}
	error.message = err.message
	
	// duplication key error
	if(err.code === 11000){
		const message = err
		error = new ErrorResponse(message, 400)
	}

	// validation error
	if(err.name === "ValidationError"){
		const message = Object.values(err.errors).map(value => value.message)

		error = new ErrorResponse(message, 400)
	}

	// what the error returns
	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || "Something went wrong"
	})
}

module.exports = errorHandler