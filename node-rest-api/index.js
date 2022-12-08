const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
// Routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const cartRoute = require("./routes/cart");

const stripe = require("./routes/stripe");

// Routes
const { PORT } = require("./config/index");

(async () => {
  await loaders(app);
  // set up router
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/carts", cartRoute);
  app.use("/api/stripe", stripe);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("successfull");
    } catch (err) {
      console.log(err);
    }
  });
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
