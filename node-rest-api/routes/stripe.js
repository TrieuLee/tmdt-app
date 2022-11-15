const express = require("express");
const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)


router.post("/payment", (req, res)=>{
    stripe.change.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    })
    

})

module.exports = router;