const express = require('express');
const OrderController = require('../controllers/orderController');
const router = express.Router();

router.post('/', OrderController.saveOrder);

module.exports = router;