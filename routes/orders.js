const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json({ message: 'Order placed', orderId: saved._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save order', error: err });
  }
});

module.exports = router;

// GET all orders
router.get('/', async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: -1 });
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch orders', error: err });
    }
  });
  