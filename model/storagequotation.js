const mongoose = require("mongoose")

const StorageQuotationSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required"],
		minlength: [2, "Minimum length for email is 2"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	fullnames: {
		type: String,
		required: [true, "Fullnames is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	company: {
		type: String,
		required: [true, "Company is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	position: {
		type: String,
		required: [true, "Position is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
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
	unit: {
		type: String,
		required: [true, "Unit is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	weight: {
		type: Number,
		required: [true, "Weight is required"],
		min: [1, "Minimum value for this field is 1"],
		max: [5000000000, "maximum value for this field is 5000000000"]
	},
	country: {
		type: String,
		required: [true, "Country is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	city: {
		type: String,
		required: [true, "City is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	productname: {
		type: String,
		required: [true, "Product name is required"],
		minlength: [3, "Minimum length for email is 3"],
		maxlength: [100, "Minimum length for email is 100"]
	},
	quantity: {
		type: Number,
		required: [true, "Quantity is required"],
		min: [1, "Minimum value for this field is 1"],
		max: [5000000000, "maximum value for this field is 5000000000"]
	},
	producttype: {
		type: String,
		required: [true, "Product type is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	storagecity: {
		type: String,
		required: [true, "Prefered city is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	storagecountry: {
		type: String,
		required: [true, "Prefered country is required"],
		minlength: [3, "Minimum length required is 3"],
		maxlength: [100, "Minimum length required is 100"]
	},
	description: {
		type: String,
		required: [true, "description is required"],
		minlength: [20, "Minimum length for email is 20"],
		maxlength: [1500, "Minimum length for email is 1500"]
	},
	date: {
		type: Date,
		default: Date.now
	}
}, {timestamps: true})

const StorageQuotation = mongoose.model("StorageQuotation", StorageQuotationSchema)
module.exports = StorageQuotation