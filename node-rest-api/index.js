const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
const userRoute = require("./routes/users");
const { PORT } = require("./config/index");
const stripe = require("./routes/stripe");
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
  app.use("/api/users", userRoute);
  // set up router
  app.use("/api/stripe", stripe);
  app.listen(process.env.PORTM || PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
