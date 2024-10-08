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

// Thông tin nhân viên
import EmployeeList from "./pages/employee/employeelist/EmployeeList";
// import UserInfo from "./pages/customer/customerinfo/CustomerInfo";
// import NewUser from "./pages/customer/newCus/NewCus";
// import EditUser from "./pages/customer/editCus/EditCus";

// Thống kê doanh thu
import StatisticList from "./pages/statistic/statisticlist/StatisticList";

// Thông tin sản phẩm
import ProductList from "./pages/product/productlist/ProductList";
import ProductInfo from "./pages/product/productinfo/ProductInfo";
import NewProduct from "./pages/product/newProduct/NewProduct";
import EditProduct from "./pages/product/editProduct/editProduct";
import EditOrder from "./pages/order/editOrder/editOrder";

// Thông tin đơn hàng
import OrderList from "./pages/order/orderlist/OrderList";
import OrderInfo from "./pages/order/orderinfo/OrderInfo";

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
            <Route index element={user ? <UserList /> : <Login />} />
            <Route path=":userId" element={user ? <UserInfo /> : <Login />} />
            <Route
              path="new"
              element={user ? <NewUser title="Thêm khách hàng" /> : <Login />}
            />
            <Route
              path="edit"
              element={
                user ? (
                  <EditUser title="Chỉnh sửa thông tin khách hàng" />
                ) : (
                  <Login />
                )
              }
            />
          </Route>
          {/* Sản phẩm */}
          <Route path="products">
            <Route index element={user ? <ProductList /> : <Login />} />
            <Route
              path=":productId"
              element={user ? <ProductInfo /> : <Login />}
            />
            <Route
              path="new"
              element={user ? <NewProduct title="Thêm sản phẩm" /> : <Login />}
            />
            <Route
              path="edit"
              element={
                user ? (
                  <EditProduct title="Chỉnh sửa thông tin sản phẩm" />
                ) : (
                  <Login />
                )
              }
            />
          </Route>
        </Route>

        <Route path="orders">
          <Route index element={user ? <OrderList /> : <Login />} />
          <Route path=":orderId" element={user ? <OrderInfo /> : <Login />} />
          <Route
            path="edit"
            element={
              user ? (
                <EditOrder title="Chỉnh sửa thông tin Đơn hàng" />
              ) : (
                <Login />
              )
            }
          />
        </Route>
        {/* Thống kê doanh thu */}
        <Route path="statistic">
          <Route index element={user ? <StatisticList /> : <Login />} />
        </Route>

        {/* Nhân viên */}
        <Route path="employees">
          <Route index element={user ? <EmployeeList /> : <Login />} />
          <Route path=":employeeId" element={user ? <UserInfo /> : <Login />} />
          <Route
            path="new"
            element={user ? <NewUser title="Thêm nhân viên" /> : <Login />}
          />
          <Route
            path="edit"
            element={
              user ? (
                <EditUser title="Chỉnh sửa thông tin nhân viên" />
              ) : (
                <Login />
              )
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
