import React from "react";
import { Routes, Route } from "react-router-dom";
//import Component
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import ProductLayout from "./components/productGrid/ProductGrid";
import NotFound from "./components/notFound/NotFound";
import ProductDetail from "./components/productDetail/ProductDetail";
import CheckOut from "./components/checkOut/CheckOut";
import OrderCompletion from "./components/orderCompletion/OrderCompletion";
import Product from "./pages/product/Product"
const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<ProductLayout />} />
        <Route path="/:id/:itemID" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/order" element={<OrderCompletion/>} />
      </Routes>
    </>
  );
};

export default Router;
