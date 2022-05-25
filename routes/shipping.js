const express = require("express");
const router = express.Router();

const { onlyAdmin } = require("../middleware/auth");
const { 
    getAllShippingRecords, 
    getShippingById, 
    getShippingByTrack,
    postShipment, 
    updateShipping, 
    updateEntireShipping, 
    deleteShipping 
} = require("../controller/shipping");


router.route("/item/:id").get(onlyAdmin, getShippingById);
router.route("/all").get(onlyAdmin, getAllShippingRecords);

router.route("/post").post(onlyAdmin, postShipment);
router.route("/item/track").post(getShippingByTrack)

router.route("/event/update").put(onlyAdmin, updateShipping);
router.route("/item/update").put(onlyAdmin, updateEntireShipping);

router.route("/delete/:id").delete(onlyAdmin, deleteShipping);

module.exports = router