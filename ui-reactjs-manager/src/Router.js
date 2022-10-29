import React from "react";
import { Routes, Route } from "react-router-dom";

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
import EditProduct from "./pages/product/editProduct/EditProduct";
// Thông tin loại sản phẩm
import CategoryList from "./pages/category/categorylist/CategoryList";
import CategoryInfo from "./pages/category/categoryinfo/CategoryInfo";
import NewCategory from "./pages/category/newCategory/NewCategory";

// Thông tin đơn hàng
import OrderList from "./pages/order/orderlist/OrderList";
import { productInputs, userInputs } from "./formSource";

import Home from "./pages/home/Home";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* Khách hàng */}
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserInfo />} />
            <Route
              path="new"
              element={<NewUser inputs={userInputs} title="Thêm khách hàng" />}
            />
            <Route
              path="edit"
              element={
                <EditUser
                  inputs={userInputs}
                  title="Chỉnh sửa thông tin khách hàng"
                />
              }
            />
          </Route>
          {/* Sản phẩm */}
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductInfo />} />
            <Route
              path="new"
              element={
                <NewProduct inputs={productInputs} title="Thêm sản phẩm" />
              }
            />
            <Route
              path="edit"
              element={
                <EditProduct
                  inputs={userInputs}
                  title="Chỉnh sửa thông tin sản phẩm"
                />
              }
            />
          </Route>
        </Route>
        {/* Loại sản phẩm */}
        <Route path="categories">
          <Route index element={<CategoryList />} />
          <Route path=":categoryId" element={<CategoryInfo />} />
          <Route
            path="new"
            element={
              <NewCategory inputs={productInputs} title="Thêm loại sản phẩm" />
            }
          />
          <Route
            path="edit"
            element={
              <NewCategory
                inputs={productInputs}
                title="Chỉnh sửa thông tin sản phẩm"
              />
            }
          />
        </Route>
        <Route path="deliveries">
          <Route index element={<OrderList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
