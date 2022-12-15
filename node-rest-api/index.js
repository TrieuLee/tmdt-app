const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
const path = require("path");
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
  app.use("/images", express.static(path.join(__dirname, "public/images")));
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/carts", cartRoute);
  app.use("/api/stripe", stripe);

  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
