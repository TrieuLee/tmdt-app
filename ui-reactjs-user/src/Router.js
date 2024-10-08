import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

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
import ChangeProfile from "./components/userProfile/ChangeProfile";
import Forget from "./pages/forget/Forget";
const Router = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="forget" element={<Forget />} />
        <Route path=":id">
          <Route index element={<Product />} />
          <Route path=":itemID" element={<ProductDetail />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="change-profile" element={<ChangeProfile />} />

        <Route path="checkout" element={<CheckOut />} />
        <Route path="checkout-cash" element={<FinishOrder />} />
        <Route path="checkout-success" element={<Success />} />
      </Routes>
    </>
  );
};

export default Router;
