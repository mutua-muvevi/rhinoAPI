const express = require("express");
const router = express.Router();
const { postQuotation, getAllQuotation, findQuotationByID, deleteQuotation } = require("../controller/quotation")
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(postQuotation);
router.route("/item/:id").get(onlyAdmin, findQuotationByID)
router.route("/all").get(onlyAdmin, getAllQuotation);
router.route("/delete/:id").delete(onlyAdmin, deleteQuotation)


module.exports = router