const express = require("express");
const router = express.Router();
const { postShipment, getAllShippingRecords, getShippingById, updateShipping } = require("../controller/shipping")
const { onlyLoggedIn, onlyAdmin } = require("../middleware/auth")

router.route("/post").post(onlyAdmin, postShipment);
router.route("/item/:id").get(onlyLoggedIn, getShippingById)
router.route("/item/update").put(onlyAdmin, updateShipping)
router.route("/all").get(onlyAdmin, getAllShippingRecords);


module.exports = router