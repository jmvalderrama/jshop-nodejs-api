const express = require('express');
const CategoryController = require('../controllers/categoryController');
const router = express.Router();

router.get('/:id', CategoryController.getCategory);
router.get('/', CategoryController.getCategories);
router.post('/', CategoryController.saveCategory);

module.exports = router;