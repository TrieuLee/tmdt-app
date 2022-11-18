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
import Profile from "./pages/profile/Profile";
import Success from "./pages/success/Success";
const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path=":id">
          <Route index element={<Product />} />
          <Route path=":itemID" element={<ProductDetail />} />
        </Route>

        <Route path="checkout" element={<CheckOut />} />
        <Route path="order" element={<FinishOrder />} />
        <Route path="profile" element={<Profile />} />

        <Route path="checkout-success" element={<Success />} />
      </Routes>
    </>
  );
};

export default Router;
