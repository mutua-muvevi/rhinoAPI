const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt")

// the user schema
const UserSchema = new mongoose.Schema({
	firstname: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [50, "The maximum length required 50"],
		required: [true, "Firstname is required"],
		trim: true
	},
	lastname: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [50, "The maximum length required 50"],
		required: [true, "Lastname is required"],
		trim: true
	},
	email: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [100, "The maximum length required 100"],
		required: [true, "Email is required"],
		match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please add a valid email"],
		trim: true
	},
	telephone: {
		type: String,
		minlength: [7, "The minimum length required 7"],
		maxlength: [25, "The maximum length required 25"],
		required: [true, "Telephone is required"],
		trim: true
	},
	city: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [100, "The maximum length required 100"],
		required: [true, "City is required"],
		trim: true
	},
	country: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [100, "The maximum length required 100"],
		required: [true, "Country is required"],
		trim: true
	},
	password: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [2500, "The maximum length required 2500"],
		required: [true, "Password is required"]
	},
	authorization: {
		type: String,
		minlength: [4, "The minimum length required 4"],
		maxlength: [6, "The maximum length required 6"],
		required: [true, "Password is required"]
	},
	resetPasswordToken : String,
	resetPasswordExpiry : Date
}, {
	timestamps: true,
	collection: "user",
})

// hashing the passowrds
UserSchema.pre("save", async function(next){
	if(!this.isModified("password")){
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
	next()
})

// comparing passwords
UserSchema.methods.comparePasswords = async function(password){
	return await bcrypt.compare(password, this.password)
}

// generating json tokens
UserSchema.methods.genToken = function(){
	return jwt.sign(
		{id: this._id},
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRY }
	)
}

// generating reset token
UserSchema.methods.genResetToken = function(){
	const resetToken = crypto.randomBytes(10).toString("hex")

	this.resetPasswordToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex")
	
	this.resetPasswordExpiry = Date.now() + 20 * (60 * 1000)
	return resetToken
}

// the model
const User = mongoose.model("User", UserSchema)
module.exports = User