import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductSection from "../../components/detail/ProductSection";
import CommentSection from "../../components/detail/CommentSection";
export default function ProductDetail() {
  return (
    <>
      <Navbar />
      <ProductSection />
      <CommentSection />
      <Footer />
    </>
  );
}
