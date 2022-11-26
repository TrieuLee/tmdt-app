const { Product } = require("../models");

class ProductCRUD {
  async get(req, res) {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (err) {
      res.status(500).send();
    }
  }

  async create(req, res) {
    const newProduct = new Product(req.body);

    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = new ProductCRUD();
