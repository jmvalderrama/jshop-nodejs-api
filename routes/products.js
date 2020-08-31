const express = require('express');
const ProductController = require('../controllers/productController');
const router = express.Router();

router.get('/:id', ProductController.getProduct);
router.get('/', ProductController.getProducts);
router.post('/', ProductController.saveProduct);

module.exports = router;