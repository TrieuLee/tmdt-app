import React from 'react';
import { Routes, Route } from 'react-router-dom';

//component
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
const Router = () => {
    return (
        <>
            <Routes>
                <Route exect path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default Router;
