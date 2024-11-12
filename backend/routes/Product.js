const express = require('express');
const productController = require('../controllers/Product');
const router = express.Router();

router.get("/product",productController.allProducts);
router.post("/product",productController.addProduct);
router.put("/product/:id",productController.updateProduct);
router.delete("/product/:id",productController.deleteProduct);

module.exports = router;