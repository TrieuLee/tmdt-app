const { Cart } = require("../models");

class CartCRUD {
  // CREATE
  async create(req, res) {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //   UPDATE
  async update(req, res) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   DELETE
  async delete(req, res) {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Giỏ hàng đã được xóa...");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //GET USER CART
  async getUserCart(req, res) {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   GET ALL CARTS
  async get(req, res) {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = new CartCRUD();
