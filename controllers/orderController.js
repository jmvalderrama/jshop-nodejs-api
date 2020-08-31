const Order = require('../models/order');

exports.saveOrder = async(req, res) => {
  try {
    let duplicate = await Order.find(req.body);
    if (duplicate.length > 0) {
      res.status(302).json({
        code: 302,
        message: `This order already exists (${duplicate._id})`
      })  
    } else {
      const order = new Order(req.body);
      const saved = await order.save();
      res.status(201).json({
        code: 201,
        message: `Data saved (${saved._id}). Please download your order information.`
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    }) 
  }
}