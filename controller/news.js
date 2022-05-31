const News = require("../model/news");
const ErrorResponse = require("../utils/errorResponse");

// posting the news
exports.postNews = async (req, res, next) => {
	const { title, subtitle, coverImage, thumbnail, content, author, tags, category } = req.body

	try {

		const existingTitle = await News.findOne({title})
		
		if (existingTitle){
			return next(new ErrorResponse("News title should be unique", 400))
		}

		const existingSubtitle = await News.findOne({subtitle})

		if (existingSubtitle){
			return next(new ErrorResponse("News subtitle should be unique", 400))
		}

		const news = await News.create({ title, subtitle, coverImage, thumbnail, content, author, tags, category });

		res.status(201).json({
			success: true,
			data: news
		})
		
	} catch (error) {
		next(error)
	}
}

// edit a given post
exports.editNews = async (req, res, next) => {
	const { title, subtitle, coverImage, thumbnail, content, author, tags, category } = req.body
	
	try {
		
		if (!title){
			return next(new ErrorResponse("Please add the title", 400))
		}
		
		if (!subtitle){
			return next(new ErrorResponse("Please add the subtitle", 400))
		}
		
		if (!content){
			return next(new ErrorResponse("Please add the news content", 400))
		}
		
		if (!author){
			return next(new ErrorResponse("Please add the author", 400))
		}

		const news = await News.findByIdAndUpdate(
			req.params.id,
			{ title, subtitle, coverImage, thumbnail, content, author, tags, category },
			{ new: true }
		)

		if(!news){
			return next(new ErrorResponse("News with that Id does not exist",))
		}

		res.status(200).json({
			success: true,
			data: news
		})
	} catch (error) {
		next(error)
	}
}

// fetch all news
exports.fetchAllNews = async( req, res, next ) => {
	try {
		const news = await News.find().sort({date: -1})

		res.status(200).json({
			success: true,
			data: news
		})
	} catch (error) {
		next(error)
	}
}

// fetch by ID
exports.fetchNewsById = async ( req, res, next ) => {
	try {
		const news = await News.findById(req.params.id)

		if (!news){
			return next(new ErrorResponse("There is no news with that ID", 404))
		}

		res.status(200).json({
			success: true,
			data: news
		})

	} catch (error) {
		next(error)
	}
}

// delete a given news
exports.deleteNews = async ( req, res, next ) => {
	try {

		const exist = await News.findById(req.params.id)

		if (!exist) {
			return next(new ErrorResponse("There is no news with that ID", 404))
		}

		const news = await News.findByIdAndRemove(req.params.id)


		res.status(200).json({
			success: true,
			data: news
		})

	} catch (error) {
		next(error)
	}
}