const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

const cors = require("cors");
module.exports = async (expressApp) => {
  dotenv.config();
  expressApp.use(express.json());
  expressApp.use(helmet({ crossOriginResourcePolicy: false,}));
  
  expressApp.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://huflit-sneaker-11.netlify.app",
        "https://sneaker-ad-huflit.netlify.app",
      ],
      credentials: true,
      optionSuccessStatus: 200,
    })
  );
};
