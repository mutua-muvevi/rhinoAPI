const Quotation = require("../model/quotation");
const ErrorResponse = require("../utils/errorResponse");

// get all quotation
exports.getAllQuotation = async (req, res, next) => {
	try {
		const quotation = await Quotation.find({}).sort({createdAt: -1})

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
        const quotation = await Quotation.findById(req.params.id)

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
	const { fullnames, company, email, telephone, city, country, message }  = req.body 

	try {
		const postquotation = await Quotation.create({ fullnames, company, email, telephone, city, country, message })
		
		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}