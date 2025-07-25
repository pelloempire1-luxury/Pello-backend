const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect('mongodb://localhost:27017/pello', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB connected"));

const products = [
  {
    title: 'Luxury Watch',
    description: 'Elegant men’s watch with leather strap.',
    price: 1999,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Stylish Sunglasses',
    description: 'UV-protected unisex sunglasses.',
    price: 899,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Wireless Earbuds',
    description: 'Bluetooth earbuds with noise cancellation.',
    price: 1299,
    image: 'https://via.placeholder.com/150',
  },
];

async function seedProducts() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products seeded!");
  mongoose.disconnect();
}

seedProducts();
