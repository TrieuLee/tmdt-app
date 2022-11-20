const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51M4DNQLPEIpJHgz9Ph5mee7rbBlhBk6nyzzASuyzG9ywTZfxFRzBVc8PzW1x6btHGaufcRI7zNeOG9uEoSREmS8O00bzDXn395"
);
const YOUR_DOMAIN = "http://localhost:3000";

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartdb.map((item) => {
    return {
      price_data: {
        currency: "USD",
        product_data: {
          name: item.title,
          images: [item.images],
        },
        unit_amount: item.price,
      },
      quantity: 1,
    };
  });
  const session = await stripe.checkout.sessions.create({
    // array cartItems
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/`,
  });

  res.send({ url: session.url });
});

module.exports = router;
