const express = require("express");
const router = express.Router();
const { postShipment, getAllShippingRecords } = require("../controller/shipping")

router.route("/post").post(postShipment);


router.route("/all").get(getAllShippingRecords);


module.exports = router