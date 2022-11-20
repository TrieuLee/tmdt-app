require("dotenv").config();

module.exports = {
  DATABASE: {
    DB_URI: process.env.MONGGO_URL,
  },
  PORT: 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  STRIPE_KEY:
    "sk_test_51M4DNQLPEIpJHgz9Ph5mee7rbBlhBk6nyzzASuyzG9ywTZfxFRzBVc8PzW1x6btHGaufcRI7zNeOG9uEoSREmS8O00bzDXn395",
};
