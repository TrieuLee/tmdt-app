const { Order } = require("../models");

class OrderCRUD {
  // CREATE
  async create(req, res) {
    const newOrder = new Order(req.body);

    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   UPDATE
  async update(req, res) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // DELETE
  async delete(req, res) {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Đơn hàng đã được xoá");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // GET USER ORDERS
  async getUserOrder(req, res) {
    try {
      const orders = await Order.find({ userId: req.params.id });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getOrder(req, res) {
    try {
      const orders = await Order.findById(req.params.id);
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   GET ALL ORDERS
  async get(req, res) {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = new OrderCRUD();
