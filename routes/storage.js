const express = require("express");
const router = express.Router();
const { postStorage, getAllStorage, getSingleStorage } = require("../controller/storage");
const { onlyLoggedIn, onlyAdmin } = require("../middleware/auth")

router.route("/post").post(onlyAdmin, postStorage)
router.route("/all").get(onlyAdmin, getAllStorage)
router.route("/item/:id").get(onlyLoggedIn, getSingleStorage)

module.exports = router