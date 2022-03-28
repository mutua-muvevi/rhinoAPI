const express = require("express");
const router = express.Router()
const { register, login, forgotPassword, resetpassword } = require("../controller/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router