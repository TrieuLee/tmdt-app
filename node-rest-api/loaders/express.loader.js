const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
module.exports = (expressApp) => {
  dotenv.config();
  expressApp.use(express.json());
  expressApp.use(helmet());
  expressApp.use(morgan("combined"));
  expressApp.use(
    "/images",
    express.static(path.join(__dirname, "public/images"))
  );
  expressApp.use(cors());
};
