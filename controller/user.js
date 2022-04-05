const ErrorResponse = require("../utils/ErrorResponse");
const User = require("../model/user");
const crypto = require("crypto");
const sendEmail = require("../utils/sendMail");

//resiter
exports.register = async (req, res, next) => {
	const { firstname, lastname, email, telephone, city, country, password, isAdmin } = req.body

	try {

		const emailExist = await User.findOne({email})

		if(emailExist){
			return next(new ErrorResponse("A user with this email already exist", 400))
		}

		const user = await User.create({ firstname, lastname, email, telephone, city, country, password, isAdmin })

		sendToken(user, 201, res)

	} catch (error) {
		next(error)
	}
}


// login
exports.login = async (req, res, next) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({email}).select("+password")

		if(!user){
			return next(new ErrorResponse("Invalid credentials", 400))
		}

		const matchPassword = await user.comparePasswords(password)

		if(!matchPassword){
			return next(new ErrorResponse("Invalid credentials", 400))
		}

		sendToken(user, 200, res)

	} catch (error) {
		next(error)
	}
}

// forgot password
exports.forgotPassword = async (req, res, next) => {
	const { email } = req.body

	try {
		const user = await User.findOne({email})

		if(!user){
			return next(new ErrorResponse("Invalid email", 400))
		}

		const resetToken = user.genResetToken()
		user.save()

		// sending email part
		const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`

		const message = `
			<h1>You have requested a password Reset</h1>
			<p>Please click this link to reset your password, If you have not request for password reset please ignore this message.</p>
			<a href=${resetUrl} clicktracking=off>
				${resetUrl}
			</a>
		`

		try {
			await sendEmail({
				to: user.email,
				subject: "You requested a password reset",
				html: message
			})

			res.status(200).json({
				success: true,
				data: "The Email was sent successfully"
			})

		} catch (error) {
			user.resetPasswordToken = undefined
			user.resetPasswordExpiry = undefined

			user.save()
			return next(new ErrorResponse("Email couldn't be sent", 500))
		}

	} catch (error) {
		next(error)
	}
}


// resetpassword
exports.resetpassword = async (req, res, next) => {

	const resetToken = crypto
		.createHash("sha256")
		.update(req.params.resetToken)
		.digest("hex")
	
	try {
		const user = await User.findOne({
			resetPasswordToken: resetToken,
			resetPasswordExpiry: { $gt : Date.now() }
		})
		
		if(!user){
			return next(new ErrorResponse("Invalid User token", 404))
		}

		user.password = req.body.password

		user.resetPasswordToken = undefined
		user.resetPasswordExpiry = undefined

		await user.save()

		res.status(200).json({
			success: true,
			data: "Password updated successfully"
		})

	} catch (error) {
		next(error)
	}

}

// deleting a user
exports.deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id)

		if(!user){
			return next(new ErrorResponse("User with that ID does not exists", 404))
		}

		res.status(200).json({
			success: true,
			data: "User was deleted successfully"
		})
	} catch (error) {
		next(error)
	}
}

// fetch users
exports.fetchAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({isAdmin: false})
			.sort({createdAt: -1})
		
		res.status(200).json({
			success: true,
			data: users
		})
	} catch (error) {
		next(error)
	}
}

// fetch admins
exports.fetchAllAdmins = async (req, res, next) => {
	try {
		const admins = await User.find({isAdmin: true})
			.sort({createdAt: -1})
		
		res.status(200).json({
			success: true,
			data: admins
		})
	} catch (error) {
		next(error)
	}
}

// send token
const sendToken = (user, statusCode, res) => {
	const token = user.genToken()

	res.status(statusCode).json({
		success: true,
		token
	})
}