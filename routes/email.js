const express = require("express");
const router = express.Router();
const { postEmail, getAllEmails } = require("../controller/email")

router.route("/post").post(postEmail);


router.route("/all").get(getAllEmails);


module.exports = router