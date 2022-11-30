import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductGrid from "../../components/productGrid/ProductGrid";
export default function Product(props) {
  return (
    <>
      <Navbar />
      <ProductGrid />
      <Footer />
    </>
  );
}
