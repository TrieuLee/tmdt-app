import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login";

//component
// Thông tin khách hàng
import UserList from "./pages/customer/customerlist/CustomerList";
import UserInfo from "./pages/customer/customerinfo/CustomerInfo";
import NewUser from "./pages/customer/newCus/NewCus";
import EditUser from "./pages/customer/editCus/EditCus";
// Thông tin sản phẩm
import ProductList from "./pages/product/productlist/ProductList";
import ProductInfo from "./pages/product/productinfo/ProductInfo";
import NewProduct from "./pages/product/newProduct/NewProduct";
import EditProduct from "./pages/product/editProduct/editProduct";

// Thông tin đơn hàng
import OrderList from "./pages/order/orderlist/OrderList";

import Home from "./pages/home/Home";
const Router = () => {
  const { user } = useContext(AuthContext);
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={user ? <Home /> : <Login />} />
          <Route path="login" element={<Login />} />

          {/* Khách hàng */}
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserInfo />} />
            <Route path="new" element={<NewUser title="Thêm khách hàng" />} />
            <Route
              path="edit"
              element={<EditUser title="Chỉnh sửa thông tin khách hàng" />}
            />
          </Route>
          {/* Sản phẩm */}
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductInfo />} />
            <Route path="new" element={<NewProduct title="Thêm sản phẩm" />} />
            <Route
              path="edit"
              element={<EditProduct title="Chỉnh sửa thông tin sản phẩm" />}
            />
          </Route>
        </Route>

        <Route path="orders">
          <Route index element={<OrderList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
