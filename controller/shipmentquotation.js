const ShipmentQuotation = require("../model/shipmentquotation");
const ErrorResponse = require("../utils/errorResponse");

// get all quotation
exports.getAllQuotation = async (req, res, next) => {
	try {
		const quotation = await ShipmentQuotation.find({}).sort({createdAt: -1})

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
		const quotation = await ShipmentQuotation.findById(req.params.id)

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
	const { title, firstname, lastname, email, company, position, unit, weight, producttype, fromcity, fromcountry, pieces, productname, quantity, merchandise, logisticstype, tocity, tocountry, description }  = req.body 

	try {
		const postquotation = await ShipmentQuotation.create({ title, firstname, lastname, email, company, position, unit, weight, producttype, fromcity, fromcountry, pieces, productname, quantity, merchandise, logisticstype, tocity, tocountry, description })
		
		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}