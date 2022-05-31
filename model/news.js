const mongoose = require("mongoose");

const NewsListSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, "The minimum length required for list title is 3"],
		maxlength: [100, "The maximum length required for list title is 100"],
		required: [true, "List title is required"]
	},
	items: {
		type: Array,
		min: [1, "The minimum length required for list item is 1"],
		max: [100, "The maximum length required for list item is 100"],
		required: [true, "List item is required"]
	}
})

const NewsContentSchema = new mongoose.Schema({
	header: {
		type: String,
		minlength: [3, "The minimum length required for header is 3"],
		maxlength: [100, "The maximum length required for header is 100"],
		required: [true, "News content header is required"]
	},
	subheader: {
		type: String,
		minlength: [3, "The minimum length required subheader is 3"],
		maxlength: [100, "The maximum length required subheader is 100"]
	},
	paragraph: {
		type: Array,
		min: [1, "Minimum set of paragraphs required is 1"],
		max: [100, "Minimum set of paragraphs required is 100"],
		required: [true, "News content paragraph is required"]
	},
	list: [NewsListSchema]
})


const NewsSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, "The minimum length required for title is 3"],
		maxlength: [100, "The maximum length required for title is 100"],
		required: [true, "News title is required"],
		unique: [true, "Title should be unique"]
	},
	subtitle: {
		type: String,
		minlength: [3, "The minimum length required for subtitle is 3"],
		maxlength: [100, "The maximum length required for subtitle is 100"],
		required: [true, "News subtitle is required"],
		unique: [true, "Subtitle should be unique"]
	},
	coverImage: {
		type: String,
		minlength: [3, "The minimum length required for cover image is 3"],
		maxlength: [100, "The maximum length required for cover image is 100"],
		required: [true, "Cover image is required"]
	},
	thumbnail: {
		type: String,
		minlength: [3, "The minimum length required thumbnail image is 3"],
		maxlength: [100, "The maximum length required thumbnail image is 100"],
		required: [true, "Thumbnail image is required"]
	},
	author: {
		type: String,
		minlength: [3, "The minimum length required for author is 3"],
		maxlength: [100, "The maximum length required for author is 100"],
		required: [true, "Author fullname is required"]
	},
	tags: {
		type: Array,
		min: [1, "Minimum set of tags required is 1"],
		max: [10, "Minimum set of tags required is 10"],
	},
	category: {
		type: String,
		minlength: [3, "The minimum length required for category is 3"],
		maxlength: [100, "The maximum length required for category is 100"],
		required: [true, "News category is required is required"]
	},
	content: [NewsContentSchema],
	date: {
		type: Date,
		default: Date.now()
	}
}, {
	timestamps: true,
	collection: "News Collection"
})

const News = mongoose.model("News", NewsSchema);
module.exports = News