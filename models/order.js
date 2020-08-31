const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client_name: {
    type: String,
    required: true
  },
  client_email: {
    type: String,
    required: true
  },
  client_address: {
    type: String,
    required: true
  },
  client_contact: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  ref_Product: [{
    type: Schema.ObjectId, 
    ref: 'Product'
  }]
}, {
  timestamps: { createdAt: 'created_at'}
});

module.exports = mongoose.model('Order', OrderSchema);