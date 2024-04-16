const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Automatically generated unique identifier
  id: Number,
  productName: String,
  mrp: String,
  bogo: Boolean,
  discountPrice: String,
  category: String,
  imageUrl: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
