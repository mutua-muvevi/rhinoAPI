const express = require("express");
const router = express.Router();

const { postFaq, editFaq } = require("../controller/faq");
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(onlyAdmin, postFaq);
router.route("/edit/:id").put(onlyAdmin, editFaq)

module.exports = router