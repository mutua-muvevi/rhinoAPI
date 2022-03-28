const StorageQuotation = require("../model/storagequotation");
const ErrorResponse = require("../utils/errorResponse");

// get all quotation
exports.getAllQuotation = async (req, res, next) => {
	try {
		const quotation = await StorageQuotation.find({}).sort({createdAt: -1})

		res.status(200).json({
			success: true,
			data: quotation
		})
	} catch (error) {
		next(error)
	}
}

// find by ID
exports.findQuotationByID = async (req, res, next) => {
	try {
		const quotation = await StorageQuotation.findById(req.params.id)

		if(!quotation){
			return next(new ErrorResponse("No quotation found with that ID", 404))
		}

		res.status(200).json({
			success: true,
			data: quotation
		})
	} catch (error) {
		next(error)
	}
}

// post an email
exports.postQuotation = async (req, res, next) => {
	const { title, fullnames, company, position, email, unit, weight, country, city, productname, quantity, producttype, storagecity, storagecountry, description }  = req.body 

	try {
		const postquotation = await StorageQuotation.create({ title, fullnames, company, position, email, unit, weight, country, city, productname, quantity, producttype, storagecity, storagecountry, description })
		
		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}