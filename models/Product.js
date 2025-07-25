const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String, // URL
});

module.exports = mongoose.model('Product', productSchema);
