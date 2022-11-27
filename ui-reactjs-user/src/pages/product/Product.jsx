import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductGrid from "../../components/productGrid/ProductGrid";
export default function Product(props) {
  const [cartItems, setCartItems] = useState([]);
  const { onAdd, onRemove } = props;
  useEffect(() => {
    setCartItems(
      localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    );
  }, []);
  return (
    <>
      <Navbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <ProductGrid cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <Footer />
    </>
  );
}
