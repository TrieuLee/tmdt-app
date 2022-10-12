import React from "react";

//import Component
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import Feature from "../../components/feature/Feature";
import Product from "../../components/product/Product";
import Gallery from "../../components/gallery/Gallery";
import NewSeason from "../../components/newSeason/Newseason";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Slider />
        <Feature />
        <Product />
        <Gallery />
        <NewSeason />
        <Footer />
      </div>
    </>
  );
}
