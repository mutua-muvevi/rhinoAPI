const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema({
	fullnames: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Fullname is required "],
	},
	email: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		required: [true, "Email is required"],
	},
	company: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Company is required "],
	},
	shipaddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Shipper's address is required "],
	},
	consignfullnames: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Cosignee fullname is required "],
	},
	consignemail: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		lowercase: true,
		required: [true, "Email is required"],
	},
	consignaddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Cosignee's address is required "],
	},
	consigncompany: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Cosign company is required "],
	},
	storagecity: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Storage City is required "],
	},
	storagecountry: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Storage Country is required "],
	},
	warehousetype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Warehouse type is required "],
	},
	weight: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Weight is required"],
	},
	weightunit: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Weight unit is required "],
	},
	producttype: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Product type is required "],
	},
	pieces: {
		type: Number,
		min: [1, "The minimum length required is 1"],
		max: [999999999, "The maximum length required is 999999999"],
		required: [true, "Pieces is required"],
	},
	datein: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Date in is required "],
	},
	intime: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Time in is required "],
	},
	dateout: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		// required: [true, "Date out is required "],
	},
	outtime: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		// required: [true, "Time out is required "],
	},
	trackno: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Track number is required "],
		trim: true,
		unique: true
	},
	idno: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "ID/ Passport number number is required "],
	},
	quality: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Quality is required "],
	},
	product: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Product is required "],
	},
	packaging: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Packaging is required "],
	},
	observation: {
		type: String,
		minlength: [20, "The minimum length required is 20"],
		maxlength: [1000, "The maximum length required is 1000"],
		required: [true, "Observation is required"]
	},
	collectoraddress: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		required: [true, "Collector's address is required "],
	},
	collectortel: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Please provide a valid telephone number"],
		required: [true, "Colector's telephone number is required "],
	},
	collectedby: {
		type: String,
		minlength: [3, "The minimum length required is 3"],
		maxlength: [100, "The maximum length required is 100"],
		// required: [true, "Collector's fullname is required "],
	},
	notes: {
		type: String,
		minlength: [20, "The minimum length required is 20"],
		maxlength: [1000, "The maximum length required is 1000"],
		required: [true, "Notes is required"]
	},
	date: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true,
	collection: "storage records"
})

const Storage = mongoose.model("storage", StorageSchema)
module.exports = Storage