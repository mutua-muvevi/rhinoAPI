const StorageQuotation = require("../model/storagequotation");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendMail");

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
		
		const html = `
			<div>
				<h1>${fullnames} has requested a storage quotation</h1>
				<p>Company name: ${company}</p>
				<p>Email : ${email}</p>
				<p>Description: ${description}</p>
				<br/>
				<h5>Please login to view the full quotation</h5>
			</div>
		`

		await sendEmail({
			to: "josephsam046@gmail.com",
			subject: "Some one has made an enquiry",
			html: html
		})

		res.status(201).json({
			success: true,
			data: postquotation
		})
	} catch (error) {
		next(error)
	}
}


// delete product quotation
exports.deleteStorageQuotation = async (req, res, next) => {
	try {
		const quotation = await StorageQuotation.findByIdAndDelete(req.params.id)

		if(!quotation){
			return next(new ErrorResponse("That product quotation could not be found", 404))
		}

		res.status(200).json({
			success: true,
			data: "The product quotation was deleted successfully"
		})
	} catch (error) {
		next(error)
	}
}