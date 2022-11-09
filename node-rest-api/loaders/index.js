const expressLoader = require("./express.loader");
const databaseLoader = require("./database.loader");
module.exports = async (app) => {
  expressLoader(app);
  await databaseLoader();
};
