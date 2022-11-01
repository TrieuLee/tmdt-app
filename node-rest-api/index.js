const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
loaders(app);

app.listen(8800, () => {
  console.log("Server is running");
});
