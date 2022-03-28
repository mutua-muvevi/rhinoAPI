const mongoose = require("mongoose");

// the event schema
const EventSchema = new mongoose.Schema({
	timeevents: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Time is required"]
	},
	dateevents: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Date is required"]
	},
	currentlocation: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Current Location is required"]
	},
	shippingstatus: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shipping status is required"]
	},
	notes: {
		type: String,
		minlength: [20, "The minimum length required is 20"],
		maxlength: [1000, "The maximum length required is 1000"],
		required: [true, "Notes is required"]
	},
	number: {
		type: Number,
	},
})


// the shipping schema
const ShippingSchema = new mongoose.Schema({
	trackno: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [500, "The maximum length required is 500"],
		required: [true, "Track number is a required field"],
		unique: true
	},
	shippersfullname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shipper's fullname is required"],
	},
	departurecity: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Origin city is required"],
	},
	departurecountry: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Origin country is required"],
	},
	departuredate: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Date of departure is required"],
	},
	consignfullnames: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Consign fullname is required "],
	},
	collectorfullname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Collector fullname is required "],
	},
	collectoraddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Collector address is required"],
	},
	collectortel: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please provide a valid telephone number"],
		required: [true, "Collector telephone number is required "],
	},
	itemsname: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Item's name is required"],
	},
	departuretime: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Departure time is required"],
	},
	arrivalcity: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Arrival city is required"],
	},
	arrivalcountry: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Arrival country is required"],
	},
	arrivaltime: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Arrival time is required"],
	},
	arrivaldate: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Arrival date is required"],
	},
	shippersemail: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		required: [true, "Shipper's email is required"],
	},
	shippersidno: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shpper's ID/Passport is required"],
	},
	shipperstelephone: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please provide a valid telephone number"],
		required: [true, "Shippers telephone number is required"],
	},
	shipperscompany: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shipper's company name is required"],
	},
	shippersaddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shippers address is required"],
	},
	consigntelephone: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please provide a valid telephone number"],
		required: [true, "Consign telephone number is required "],
	},
	consignemail: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Consign email is required"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true
	},
	consigncompany: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Consign company's name is required "],
	},
	consignaddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Cosign address is required"],
	},
	// cosignidno: {
	// 	type: String,
	// 	minlength: [3, "The minimum length required is 3"],
	// 	maxlength: [100, "The maximum length required is 100"],
	// 	required: [true, "Track number "],
	// },
	logisticstype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Mode of transportation is required"],
	},
	itemsweight: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Item weight is required"],
	},
	itemsweightunit: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Item weight unit is required "],
	},
	itemsproducttype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Item product type is required"],
	},
	itemspieces: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Pieces is required"],
	},

	itemsquality: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Item quiality is required "],
	},
	quantifiableunit: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Unit name is required "],
	},
	events: [EventSchema],
	date: {
		type: Date,
		default: Date.now
	},

}, {
	timestamps: true,
	collection: "shipment records"
})


const Shipping = mongoose.model("shipping", ShippingSchema)
module.exports = Shipping