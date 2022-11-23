const { Product } = require("../models");

class ProductCRUD {
// Lấy 1 sản phẩm

  // Lấy danh sách tất cả sản phẩm
  async get(req, res) {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (err) {
      res.status(500).send();
    }
  }
}

module.exports = new ProductCRUD();
