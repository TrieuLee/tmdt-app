import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import OrderGrid from "../../components/finishOrderGrid/OrderGrid";
export default function FinsishOrder() {
  return (
    <>
      <Navbar />
      <OrderGrid />
      <Footer />
    </>
  );
}
