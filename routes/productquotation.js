const express = require("express");
const router = express.Router();
const { postQuotation, getAllQuotation, findQuotationByID } = require("../controller/productquotation")

router.route("/post").post(postQuotation);

router.route("/item/:id").get(findQuotationByID)

router.route("/all").get(getAllQuotation);


module.exports = router