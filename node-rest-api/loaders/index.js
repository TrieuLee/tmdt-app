const expressLoader = require("./express.loader");
//const databaseLoader = require("./database.loader");
module.exports = (app) => {
  expressLoader(app);
  //databaseLoader();
};
