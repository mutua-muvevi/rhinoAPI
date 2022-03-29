const express = require("express");
const router = express.Router();
const { postShipment, getAllShippingRecords, getShippingById, updateShipping, updateEntireShipping, deleteShipping } = require("../controller/shipping")
const { onlyLoggedIn, onlyAdmin } = require("../middleware/auth")

router.route("/post").post(onlyAdmin, postShipment);
router.route("/item/:id").get(onlyLoggedIn, getShippingById)
router.route("/event/update").put(onlyAdmin, updateShipping)
router.route("/item/update").put(onlyAdmin, updateEntireShipping)
router.route("/all").get(onlyAdmin, getAllShippingRecords);
router.route("/delete/:id").delete(onlyAdmin, deleteShipping)

module.exports = router