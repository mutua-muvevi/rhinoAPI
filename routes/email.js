const express = require("express");
const router = express.Router();
const { postEmail, getAllEmails, deleteEmail } = require("../controller/email")
const { onlyAdmin } = require("../middleware/auth")

router.route("/post").post(postEmail);
router.route("/delete/:id").delete(deleteEmail)
router.route("/all").get(onlyAdmin, getAllEmails);


module.exports = router