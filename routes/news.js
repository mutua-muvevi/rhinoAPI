const express = require("express");
const router = express.Router();

const { postNews, editNews, fetchAllNews, fetchNewsById, deleteNews } = require("../controller/news");
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(onlyAdmin, postNews);
router.route("/edit/:id").put(onlyAdmin, editNews);

router.route("/all").get(fetchAllNews);
router.route("/news/:id").get(fetchNewsById);

router.route("/delete/:id").delete(onlyAdmin, deleteNews);

module.exports = router