const express = require("express");
const router = express.Router();

const { postFaq, editFaq, getAll, getFaqByID, deleteFaq } = require("../controller/faq");
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(onlyAdmin, postFaq);
router.route("/edit/:id").put(onlyAdmin, editFaq);

router.route("/all").get(getAll);
router.route("/faq/:id").get(getFaqByID)

router.route("/delete/:id").delete(onlyAdmin, deleteFaq)

module.exports = router