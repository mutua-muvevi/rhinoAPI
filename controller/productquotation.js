const ProductQuotation = require("../model/productquotation");
const ErrorResponse = require("../utils/errorResponse");

// get all quotation
exports.getAllQuotation = async (req, res, next) => {
	try {
		const quotation = await ProductQuotation.find({}).sort({createdAt: -1})

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
		const quotation = await ProductQuotation.findById(req.params.id)

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
	const { title, fullnames, company, email, position, country, city, product, quantity, packaging, unit, weight, description }  = req.body 

	try {
		const postquotation = await ProductQuotation.create({ title, fullnames, company, email, position, country, city, product, quantity, packaging, unit, weight, description })
		
		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}