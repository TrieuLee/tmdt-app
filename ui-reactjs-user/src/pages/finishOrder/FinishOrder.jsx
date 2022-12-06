import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CashCOGrid from "../../components/cashCheckOut/CashCOGrid";
export default function FinsishOrder() {
  return (
    <>
      <Navbar />
      <CashCOGrid />
      <Footer />
    </>
  );
}
