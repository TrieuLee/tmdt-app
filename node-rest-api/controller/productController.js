const { Product, Order } = require("../models");

class ProductCRUD {
  // Create
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

  // Update
  async update(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async updateQuantity(req, res) {
    // id của order
    try {
      const orderData = await Order.findById(req.params.id);
      orderData.products.forEach(async (i) => {
        const updateProduct = await Product.findById(i.productId);
        updateProduct.quantity += i.quantity;
        await updateProduct.save();
      });

      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // Delete
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Sản phẩm đã được xóa...");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // GET PRODUCT By ID
  async getProduct(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // GET ALL PRODUCT
  async get(req, res) {
    const qNew = req.query.new;
    const qBrand = req.query.brand;
    try {
      let products;

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qBrand) {
        products = await Product.find({
          brand: {
            $in: [qBrand],
          },
        });
      } else {
        products = await Product.find();
      }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new ProductCRUD();
