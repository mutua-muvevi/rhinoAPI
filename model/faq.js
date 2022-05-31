const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
    question: {
        type: String,
		minlength: [3, "The minimum length required for question is 3"],
		maxlength: [100, "The maximum length required for question is 100"],
		required: [true, "The question is required"],
        unique: true
    },
    answer: {
        type: String,
		minlength: [3, "The minimum length required for answer is 3"],
		maxlength: [100, "The maximum length required for answer is 100"],
		required: [true, "The answer is required"],
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{
	timestamps: true,
	collection: "FAQ Collection"
})

const Faq = mongoose.model("FAQ", FaqSchema);
module.exports = Faq