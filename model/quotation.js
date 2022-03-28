const mongoose = require("mongoose");

const QuotationSchema = new mongoose.Schema({
	fullnames: {
		type: String,
		required: [true, "Fullname is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	company: {
		type: String,
		required: [true, "Company is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		trim: true
	},
	telephone: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please provide a valid telephone number"],
		required: [true, "Telephone number is required"],
	},
	city: {
		type: String,
		required: [true, "City is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	country: {
		type: String,
		required: [true, "Country is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	message: {
		type: String,
		required: [true, "Message is required"],
		minlength: [20, "Minimum length for email is 20"],
		maxlength: [1500, "Minimum length for email is 1500"]
	},
	date: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true,
	collection: "general enquiries"
})

const Quotation = mongoose.model("Quotation", QuotationSchema)
module.exports = Quotation