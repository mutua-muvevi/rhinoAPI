const express = require("express");
const router = express.Router();
const { postStorage, getAllStorage, getSingleStorage } = require("../controller/storage");

router.route("/post").post(postStorage)
router.route("/all").get(getAllStorage)
router.route("/item/:id").get(getSingleStorage)

module.exports = router