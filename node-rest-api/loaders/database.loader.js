const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("MongoDb is connected");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
