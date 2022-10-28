import React from 'react';
import { Routes, Route } from 'react-router-dom';

//component
import UserList from './pages/customer/customerlist/CustomerList';
import UserInfo from './pages/customer/customerinfo/CustomerInfo';
import ProductList from './pages/product/productlist/ProductList';
import ProductInfo from './pages/product/productinfo/ProductInfo';
import Table from './components/table/Table';
import { productInputs, userInputs } from './formSource';
import New from './pages/new/New';

import Home from './pages/home/Home';
const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="users">
                        <Route index element={<UserList />} />
                        <Route path=":userId" element={<UserInfo />} />
                        <Route path="new" element={<New inputs={userInputs} title="Thêm khách hàng" />} />
                    </Route>
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path=":productId" element={<ProductInfo />} />
                        <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
                    </Route>
                    <Route path="deliveries">
                        <Route index element={<Table />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default Router;
