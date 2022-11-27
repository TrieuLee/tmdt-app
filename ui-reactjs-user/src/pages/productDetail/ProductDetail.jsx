import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductSection from "../../components/detail/ProductSection";
import Cart from "../../components/cart/Cart";
export default function ProductDetail() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id
          ? { ...exist, qty: exist.qty + 1, size: exist.size }
          : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("products", JSON.stringify(newCartItems));
    } else {
      if (!product.size) {
        window.alert("Vui lòng chọn Size giày");
      } else {
        const newCartItems = [
          ...cartItems,
          { ...product, qty: 1, size: product.size },
        ];
        setCartItems(newCartItems);
        localStorage.setItem("products", JSON.stringify(newCartItems));
      }
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id
          ? { ...exist, qty: exist.qty - 1, size: exist.size }
          : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("products", JSON.stringify(newCartItems));
    }
  };

  useEffect(() => {
    setCartItems(
      localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    );
  }, []);
  return (
    <>
      <Navbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}>
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </Navbar>
      <ProductSection onAdd={onAdd} cartItems={cartItems} />
      <Footer />
    </>
  );
}
