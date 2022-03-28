const nodemailer = require("nodemailer");

const sendEmail = (options) => {

	// the transporter that will send the mail
	const transporter = nodemailer.createTransport({
		service : process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD
		}
	})

	// mail options
	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: options.to,
		subject: options.subject,
		html: options.html
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if(error){
			console.log(`Send Mail Error : ${error}`)
		} else {
			console.log(`Email sent successfully`)
		}
	})
}

module.exports = sendEmail