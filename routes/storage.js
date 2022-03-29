const express = require("express");
const router = express.Router();
const { postStorage, getAllStorage, getSingleStorage, updateStorage, deleteStorage } = require("../controller/storage");
const { onlyLoggedIn, onlyAdmin } = require("../middleware/auth")

router.route("/post").post(onlyAdmin, postStorage)
router.route("/all").get(onlyAdmin, getAllStorage)
router.route("/item/:id").get(onlyLoggedIn, getSingleStorage)
router.route("/update/:id").put(onlyAdmin, updateStorage)
router.route("/delete/:id").delete(onlyAdmin, deleteStorage)

module.exports = router