const mongoose = require("mongoose");

const ShipmentQuotationSchema = new mongoose.Schema({
	title : {
		type: String,
		minlength: [2, "The minimum length required is 2"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Title is required "],
	},
	firstname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Firstname is required "],
	},
	lastname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Lastname is required "],
	},
	email: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		required: [true, "Shipper's email is required"],
	},
	company: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Company is required "],
	},
	position: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Your position is required "],
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
	producttype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Product type is required "],
	},
	fromcity: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Origin service city is required "],
	},
	fromcountry: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Origin service country name is required "],
	},
	pieces: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Item's pieces is required"],
	},
	productname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Product name is required "],
	},
	quantity: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Quantity is required"],
	},
	merchandise: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Merrchandise is required "],
	},
	logisticstype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Type of transportatiob is required "],
	},
	tocity: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Destination city name is required "],
	},
	tocountry: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Destination country name is required "],
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
	collection: "shipment quotation records"
})

const ShipmentQuotation = mongoose.model("shipmentquotation", ShipmentQuotationSchema);
module.exports = ShipmentQuotation