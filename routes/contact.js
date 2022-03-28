const express = require("express");
const router = express.Router();
const { contactForm } = require("../controller/contact")

router.route("/post").post(contactForm);


module.exports = router