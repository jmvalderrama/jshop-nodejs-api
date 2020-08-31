const Category = require('../models/category');

exports.getCategory = async(req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('ref_Product');
    if (category != null) {
      res.status(200).json({
        code: 200,
        data: category
      })
    } else {
      res.status(404).json({
        code: 404,
        message: 'Category not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    })
  }
}

exports.getCategories = async(req, res) => {
  try {
    const categories = await Category.find({});
    if (categories != null) {
      res.status(200).json({
        code: 200,
        data: categories
      })
    } else {
      res.status(404).json({
        code: 404,
        message: 'No categories were found'
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    })   
  }
}

exports.saveCategory = async(req, res) => {
  try {
    const { name, ref_Product } = req.body;
    let duplicate = await Category.find({name, ref_Product });
    if (duplicate.length > 0) {
      res.status(302).json({
        code: 302,
        message: `This category already exists (${duplicate[0]._id})`
      })  
    } else {
      const category = new Category({name, ref_Product });
      const saved = await category.save();
      res.status(201).json({
        code: 201,
        message: `Category saved with id ${saved._id}`
      })
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    }) 
  }
}