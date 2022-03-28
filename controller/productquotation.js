const ProductQuotation = require("../model/productquotation");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendMail");

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
		
		const message = `
			<div>
				<h1>${fullnames} has requested a product quotation</h1>
				<p>Product name: ${product}</p>
				<p>Email : ${email}</p>
				<p>Quantity : ${quantity}</p>
				<p>Description: ${description}</p>
				<br/>
				<h5>Please login to view the full quotation</h5>
			</div>
		`

		await sendEmail({
			to: "josephsam046@gmail.com",
			subject: "Someone has made a product quotation",
			html: message
		})

		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}