const Faq = require("../model/faq");
const ErrorResponse = require("../utils/errorResponse");

// post FAQ
exports.postFaq = async ( req, res, next ) => {
    const { question, answer } = req.body

    try {

        const existingQuestion = await Faq.findOne({question});

        if (existingQuestion){
            return next(new ErrorResponse("That question exists please choose another"), 400)
        }

        const existingAnswer = await Faq.findOne({answer});

        if (existingAnswer){
            return next(new ErrorResponse("That answer exists please choose another"), 400)
        }

        const faq = await Faq.create({ question, answer })

        res.status(201).json({
            success: true,
            data: faq
        })
    } catch (error) {
        next(error)
    }
}

// edit FAQ
exports.editFaq = async ( req, res, next ) => {
    const { question, answer } = req.body

    try {
        const faq = await Faq.findByIdAndUpdate(
            req.params.id,
            { question, answer },
            { new : true }
        )

        if(!faq){
            return next(new ErrorResponse("That question does not exist"))
        }

        res.status(200).json({
            success: true,
            data: faq
        })

    } catch (error) {
        next(error)
    }
}

// get all faqs
exports.getAll = async ( req, res, next ) => {
    try {
        const faqs = await Faq.find({}).sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            data: faqs
        })
    } catch (error) {
        next(error)
    }
}

// get by ID
exports.getFaqByID = async ( req, res, next ) => {
    try {
        const faq = await Faq.findById(req.params.id)

        if(!faq){
            return next(new ErrorResponse("Question with that ID does not exist", 400))
        }

        res.status(200).json({
            success: true,
            data: faq
        })
    } catch (error) {
        next(error)
    }
}

// delete faq
exports.deleteFaq = async ( req, res, next ) => {
    try {
        const faq = await Faq.findByIdAndDelete(req.params.id)

        if (!faq){
            return next(new ErrorResponse("Question with that ID does not exist", 400))
        }

        res.status(200).json({
            success: true,
            data: faq
        })

    } catch (error) {
        next(error)
    }
}