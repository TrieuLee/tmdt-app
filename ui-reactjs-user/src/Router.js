import React from "react";
import { Routes, Route } from "react-router-dom";
//import Component
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import CheckOut from "./pages/checkOut/CheckOut";
import FinishOrder from "./pages/finishOrder/FinishOrder";
const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/:id/:itemID" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/order" element={<FinishOrder />} />
      </Routes>
    </>
  );
};

export default Router;
