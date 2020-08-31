const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ref_Product: [{
    type: Schema.ObjectId, 
    ref: 'Product'
  }]
});

module.exports = mongoose.model('Category', CategorySchema);