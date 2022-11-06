import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductSection from "../../components/detail/ProductSection";
import CommentSection from "../../components/detail/CommentSection";
export default function ProductDetail() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log("into cart");
  };
  console.log(cartItems);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Navbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <ProductSection onAdd={onAdd} cartItems={cartItems} />
      <CommentSection />
      <Footer />
    </>
  );
}
