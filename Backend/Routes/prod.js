const express = require("express");
const router = express.Router();
const Products = require('../Controller/product')
router.use('/postdata',Products.postData)
router.use('/getproduct',Products.GetData)
router.use('/getproductbyid',Products.GetProdById)
router.use('/updateprod',Products.UpdateProd)
router.use('/deleteprod',Products.DeletProduct)
 
module.exports = router;
