const mongoose = require("mongoose");

const ProductQuotationSchema = new mongoose.Schema({
	company: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Company is required "],
	},
	fullnames: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Fullname is required "],
	},
	title: {
		type: String,
		minlength: [2, "The minimum length required is 2"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Title is required "],
	},
	email: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		required: [true, "Email is required"],
	},
	position: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Your position is required "],
	},
	country: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Country is required "],
	},
	city: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "City is required "],
	},
	product: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Product is required "],
	},
	quantity: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Quantity is required"],
	},
	packaging: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Packaging is required "],
	},
	unit: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Unit is required "],
	},
	weight: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Weight is required"],
	},
	description: {
		type: String,
		minlength: [20, "The minimum length required is 20"],
		maxlength: [1000, "The maximum length required is 1000"],
		required: [true, "Description is required"]
	},
	date: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true,
	collection: "product quotation records"
})

const ProductQuotation = mongoose.model("productquotation", ProductQuotationSchema);
module.exports = ProductQuotation