const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controller/contact")

router.route("/post").post(sendMessage);


module.exports = router