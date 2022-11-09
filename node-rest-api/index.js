const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
const userRoute = require("./routes/users");
const { PORT } = require("./config/index");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("successfull");
//   } catch (err) {
//     console.log(err);
//   }
// });

(async () => {
  await loaders(app);

  // set up router

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
