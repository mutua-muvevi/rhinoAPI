const Blog = require("../model/blog");
const ErrorResponse = require("../utils/errorResponse");

const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");


// posting the blog
exports.postBlog = async (req, res, next) => {
	const { title, subtitle, coverImage, thumbnail, content, author, tags, category } = req.body

	try {

		const existingTitle = await Blog.findOne({title})
		
		if (existingTitle){
			return next(new ErrorResponse("Blog title should be unique", 400))
		}

		const existingSubtitle = await Blog.findOne({subtitle})

		if (existingSubtitle){
			return next(new ErrorResponse("Blog subtitle should be unique", 400))
		}

		const blog = await Blog.create({ title, subtitle, coverImage, thumbnail, content, author, tags, category });

		res.status(201).json({
			success: true,
			data: blog
		})
		
	} catch (error) {
		next(error)
	}
}

// edit a given post
exports.editBlog = async (req, res, next) => {
	const { title, subtitle, coverImage, thumbnail, content, author, tags, category } = req.body
	
	try {
		
		if (!title){
			return next(new ErrorResponse("Please add the title", 400))
		}
		
		if (!subtitle){
			return next(new ErrorResponse("Please add the subtitle", 400))
		}
		
		if (!content){
			return next(new ErrorResponse("Please add the blog content", 400))
		}
		
		if (!author){
			return next(new ErrorResponse("Please add the author", 400))
		}

		const blog = await Blog.findByIdAndUpdate(
			req.params.id,
			{ title, subtitle, coverImage, thumbnail, content, author, tags, category },
			{ new: true }
		)

		if(!blog){
			return next(new ErrorResponse("Blog with that Id does not exist",))
		}

		res.status(200).json({
			success: true,
			data: blog
		})
	} catch (error) {
		next(error)
	}
}

// fetch all blogs
exports.fetchAllBlogs = async( req, res, next ) => {
	try {
		const blogs = await Blog.find().sort({date: -1})

		res.status(200).json({
			success: true,
			data: blogs
		})
	} catch (error) {
		next(error)
	}
}

// fetch by ID
exports.fetchBlogById = async ( req, res, next ) => {
	try {
		const blog = await Blog.findById(req.params.id)

		if (!blog){
			return next(new ErrorResponse("There is no blogpost with that ID", 404))
		}

		res.status(200).json({
			success: true,
			data: blog
		})

	} catch (error) {
		next(error)
	}
}

// delete a given blog
exports.deleteBlog = async ( req, res, next ) => {
	try {

		const exist = await Blog.findById(req.params.id)

		if (!exist) {
			return next(new ErrorResponse("There is no blogpost with that ID", 404))
		}

		const blog = await Blog.findByIdAndRemove(req.params.id)


		res.status(200).json({
			success: true,
			data: blog
		})

	} catch (error) {
		next(error)
	}
}