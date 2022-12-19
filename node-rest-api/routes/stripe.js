const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const stripe = require("stripe")(
  "sk_test_51M4DNQLPEIpJHgz9Ph5mee7rbBlhBk6nyzzASuyzG9ywTZfxFRzBVc8PzW1x6btHGaufcRI7zNeOG9uEoSREmS8O00bzDXn395"
);
const { Order } = require("../models");
const YOUR_DOMAIN = "http://localhost:3000";

router.post("/create-checkout-session", async (req, res) => {
  const cart = req.body.carts.cart;
  const a = (req.body.carts.total.subPrice * 0.1) | 0;
  const x = cart.map((item) => {
    const temp = {
      id: item._id,
      quantity: item.quantity,
      name: item.name,
      price: item.price,
    };
    console.log(item.img);
    return temp;
  });
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(x),
    },
  });

  const line_items = req.body.carts.cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.img],
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "VN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: a,
            currency: "usd",
          },
          display_name: "Fast Delivery",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/cart`,
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});

// Create order function

const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const products = Items.map((item) => {
    const product = {
      productId: item.id,
      quantity: item.quantity,
      name: item.name,
      price: item.price,
    };
    return product;
  });
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products,
    total: data.amount_total,
    subtotal: data.amount_shipping ? data.amount_shipping : 0,
    shipping: data.customer_details,
    payment_status: "Đã thanh toán",
    payment_method: 1,
  });

  try {
    const savedOrder = await newOrder.save();
    savedOrder.products.forEach(async (i) => {
      const updateProduct = await Product.findById(i.productId);
      updateProduct.quantity -= i.quantity;
      await updateProduct.save();
    });
    console.log(savedOrder);
  } catch (err) {
    console.log(err);
  }
};

// Stripe webhoook

router.post(
  "/webhook",
  express.json({ type: "application/json" }),
  async (req, res) => {
    let data;
    let eventType;

    // Check if webhook signing is configured.
    let webhookSecret;
    //webhookSecret = process.env.STRIPE_WEB_HOOK;

    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers["stripe-signature"];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed:  ${err}`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data.object;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the checkout.session.completed event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then(async (customer) => {
          try {
            // CREATE ORDER
            createOrder(customer, data);
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => console.log(err.message));
    }

    res.status(200).end();
  }
);

module.exports = router;
