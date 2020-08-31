const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  file: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);