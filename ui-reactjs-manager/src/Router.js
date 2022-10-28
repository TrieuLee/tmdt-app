import React from 'react';
import { Routes, Route } from 'react-router-dom';

//component
import List from './pages/list/List';
import Single from './pages/single/Single';
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
                        <Route index element={<List />} />
                        <Route path=":userId" element={<Single />} />
                        <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
                    </Route>
                    <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default Router;
