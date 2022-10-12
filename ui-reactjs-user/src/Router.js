import React from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
//import Component
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import ProductLayout from "./components/productLayout/ProductLayout";
import NotFound from "./components/notFound/NotFound"
const Router = () => {
  return (
    <>
    <Routes>
      {/* {["/air-force/", "/:jordan", "/:blazer", "/:cratier","/:hippie"].map(path =>(
        <Route
          key ={path}
          path ={path}
          element={<ProductLayout />}>

        </Route>
      ))} */}
      <Route exact path="/" element={<Home />} />
      <Route path="*" element = {<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:id" element={<ProductLayout/>}/>
    </Routes>
 
      </>
    
    
    
  );
};

export default Router;
