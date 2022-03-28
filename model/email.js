const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		trim: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
}, {timestamps: true})

const Email = mongoose.model("Emails", EmailSchema);
module.exports = Email