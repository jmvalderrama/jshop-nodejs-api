const Product = require('../models/product');

exports.getProduct = async(req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product != null) {
      res.status(200).json({
        code: 200,
        data: product
      })
    } else {
      res.status(404).json({
        code: 404,
        message: 'Product not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    })
  }
}

exports.getProducts = async(req, res) => {
  try {
    const products = await Product.find({});
    if (products != null) {
      res.status(200).json({
        code: 200,
        data: products
      })
    } else {
      res.status(404).json({
        code: 404,
        message: 'No products were found'
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    })   
  }
}

exports.saveProduct = async(req, res) => {
  try {
    let duplicate = await Product.find(req.body);
    if (duplicate.length > 0) {
      res.status(302).json({
        code: 302,
        message: `This product already exists (${duplicate[0]._id})`
      })  
    } else {
      const product = new Product(req.body);
      const saved = await product.save();
      res.status(201).json({
        code: 201,
        message: `Product saved with id ${saved._id}`
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    }) 
  }
}
