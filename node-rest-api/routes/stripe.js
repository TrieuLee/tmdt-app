const express = require("express");
const router = express.Router();
const stripe = require("stripe")(STRIPE_SERCET_KEY);
const YOUR_DOMAIN = "http://localhost:3000";

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.carts.cart.products.map((item) => {
    console.log(req.body.carts.cart.products);
    
    return {
      price_data: {
        currency: "USD",
        product_data: {
          name: item.title,
          images: [item.images],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
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
