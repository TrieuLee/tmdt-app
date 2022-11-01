const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(
      process.env.MONGGO_URL,
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
