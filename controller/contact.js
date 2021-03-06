const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendMail");

exports.sendMessage = async (req, res, next) => {
	const { fullname, email, company, telephone, message } = req.body
	
	try {

		if (!fullname || !email || !company || !telephone || !message ){
			return next(new ErrorResponse("Please fill out all fields in contact us form", 400))
		}

		const messageBody = `
			<div>
				<h1>${fullname} has contacted you</h1>
				<p>Email : ${email}</p>
				<p>Company: ${company}</p>
				<p>Telephone: ${telephone}</p>
				<p>Message: ${message}</p>
			</div>
		`

		await sendEmail({
			to: "josephsam046@gmail.com",
			subject: "Contact form enquiry message",
			html: messageBody
		})


		res.status(200).json({
			success: true,
			data: "Email was sent successfully"
		})
		
	} catch (error) {
		next(error)
	}
}