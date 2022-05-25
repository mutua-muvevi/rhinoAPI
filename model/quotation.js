const mongoose = require("mongoose");

const QuotationSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "Firstname is required"],
		minlength: [3, "Minimum length for firstname is 3"],
		maxlength: [100, "Minimum length for firstname is 100"]
	},
	lastname: {
		type: String,
		required: [true, "Lastname is required"],
		minlength: [3, "Minimum length for lastname is 3"],
		maxlength: [100, "Minimum length for lastname is 100"]
	},
	company: {
		type: String,
		minlength: [3, "Minimum length for company is 3"],
		maxlength: [100, "Minimum length for company is 100"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		minlength: [3, "Minimum length for email is 5"],
		maxlength: [100, "Minimum length for email is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		trim: true
	},
	telephone: {
		type: String,
		minlength: [3, "The minimum length for telephone is 3"],
		maxlength: [100, "The maximum length for telephone is 100"],
		required: [true, "Telephone number is required"],
	},
	city: {
		type: String,
		required: [true, "City is required"],
		minlength: [3, "Minimum length for city is 3"],
		maxlength: [100, "Minimum length for city is 100"]
	},
	country: {
		type: String,
		required: [true, "Country is required"],
		minlength: [3, "Minimum length for country is 3"],
		maxlength: [100, "Minimum length for country is 100"]
	},
	product: {
		type: String,
		required: [true, "Product/Service Details is required"],
		minlength: [3, "Minimum length for product is 3"],
		maxlength: [100, "Minimum length for product is 100"]
	},
	message: {
		type: String,
		required: [true, "Message is required"],
		minlength: [20, "Minimum length for message is 20"],
		maxlength: [1000, "Minimum length for message is 1500"]
	},
	date: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true,
	collection: "quotation"
})

const Quotation = mongoose.model("Quotation", QuotationSchema)
module.exports = Quotation