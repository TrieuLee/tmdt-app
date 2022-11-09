import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import UserProfile from "../../components/userProfile/UserProfile";
export default function Profile() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <Footer />
    </>
  );
}
