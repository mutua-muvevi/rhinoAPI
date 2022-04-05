const express = require("express");
const router = express.Router()
const { register, login, forgotPassword, resetpassword, deleteUser, fetchAllUsers, fetchAllAdmins } = require("../controller/user");
const { onlyAdmin } = require("../middleware/auth")

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/delete/:id").delete(deleteUser);
router.route("/users").get(onlyAdmin, fetchAllUsers);
router.route("/admin").get(onlyAdmin, fetchAllAdmins);

module.exports = router