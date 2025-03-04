import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Navbar should only be called once */}
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
