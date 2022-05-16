const express = require("express");
const router = express.Router();
const { postShipment, getAllShippingRecords, getShippingById, updateShipping, updateEntireShipping, deleteShipping } = require("../controller/shipping")
const { onlyLoggedIn, onlyAdmin } = require("../middleware/auth")

router.route("/post").post(onlyAdmin, postShipment);
router.route("/item/:id").get( getShippingById)
router.route("/event/update").put( updateShipping)
router.route("/item/update").put( updateEntireShipping)
router.route("/all").get( getAllShippingRecords);
router.route("/delete/:id").delete( deleteShipping)

module.exports = router