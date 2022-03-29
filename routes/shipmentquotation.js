const express = require("express");
const router = express.Router();
const { postQuotation, getAllQuotation, findQuotationByID, deleteShipmentQuotation } = require("../controller/shipmentquotation")

router.route("/post").post(postQuotation);
router.route("/item/:id").get(findQuotationByID)
router.route("/all").get(getAllQuotation);
router.route("/delete/:id").delete(deleteShipmentQuotation)


module.exports = router