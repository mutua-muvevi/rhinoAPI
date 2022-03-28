const Email = require("../model/email");
const ErrorResponse = require("../utils/errorResponse");

// get all emails
exports.getAllEmails = async (req, res, next) => {
	try {
		const emails = await Email.find({}).sort({date: -1})

		res.status(200).json({
			success: true,
			data: emails
		})
	} catch (error) {
		next(error)
	}
}

// post an email
exports.postEmail = async (req, res, next) => {
	const {email}  = req.body 

	try {
		const postemail = await Email.create({email})
		
		res.status(201).json({
			success: true,
			data: postemail
		})
	} catch (error) {
		next(error)
	}
}