import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RootLayout;
