const express = require("express");
const router = express.Router();
const { postShipment, getAllShippingRecords, getShippingById, updateShipping } = require("../controller/shipping")

router.route("/post").post(postShipment);
router.route("/item/:id").get(getShippingById)
router.route("/item/update").put(updateShipping)
router.route("/all").get(getAllShippingRecords);


module.exports = router