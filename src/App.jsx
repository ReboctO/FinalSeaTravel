import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Transaction from "./pages/Transaction";
import LatestOffers from "./pages/LatestOffers";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/latestOffers" element={<LatestOffers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
