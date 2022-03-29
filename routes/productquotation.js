const express = require("express");
const router = express.Router();
const { postQuotation, getAllQuotation, findQuotationByID, deleteProductQuotation } = require("../controller/productquotation")
const { onlyAdmin } = require("../middleware/auth");

router.route("/post").post(postQuotation);
router.route("/item/:id").get(findQuotationByID)
router.route("/all").get(getAllQuotation);
router.route("/delete/:id").delete(onlyAdmin, deleteProductQuotation)


module.exports = router