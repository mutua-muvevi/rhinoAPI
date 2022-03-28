const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt")

// the user schema
const UserSchema = new mongoose.Schema({
	firstname: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "Firstname is required"],
		trim: true
	},
	lastname: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "Lastname is required"],
		trim: true
	},
	email: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "Email is required"],
		match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please add a valid email"],
		trim: true
	},
	telephone: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please add a valid phone number"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "Telephone is required"],
		trim: true
	},
	city: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "City is required"],
		trim: true
	},
	country: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [250, "The maximum length required 250"],
		required: [true, "Country is required"],
		trim: true
	},
	password: {
		type: String,
		minlength: [3, "The minimum length required 3"],
		maxlength: [2500, "The maximum length required 2500"],
		required: [true, "Password is required"]
	},
	isAdmin: {
		type: Boolean
	},
	resetPasswordToken : String,
	resetPasswordExpiry : Date
}, {
	timestamps: true, 
	bufferTimeoutMS: 11000,
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