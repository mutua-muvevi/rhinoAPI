const express = require("express");
const router = express.Router();

const { postBlog, editBlog, fetchAllBlogs, fetchBlogById, deleteBlog } = require("../controller/blog");
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(onlyAdmin, postBlog);
router.route("/edit/:id").put(onlyAdmin, editBlog);

router.route("/all").get(fetchAllBlogs);
router.route("/blog/:id").get(fetchBlogById);

router.route("/delete/:id").delete(onlyAdmin, deleteBlog);

module.exports = router