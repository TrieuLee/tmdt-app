const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
const userRoute = require("./routes/users");
loaders(app);

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

app.use("/api/users", userRoute);
app.listen(8800, () => {
  console.log("Server is running at port", 8800);
});
