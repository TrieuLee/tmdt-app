const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
module.exports = (expressApp) => {
  dotenv.config();
  expressApp.use(express.json());
  expressApp.use(helmet());
  expressApp.use(
    "/images",
    express.static(path.join(__dirname, "public/images"))
  );
  expressApp.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
};
