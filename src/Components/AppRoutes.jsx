import React from "react";
import { Routes, Route } from "react-router-dom";
import QRGenerator from "./QRGenerator";
import QRScanner from "./QRScanner";
import QRHistory from "./QRHistory";
import Navbar from "./Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/history" element={<QRHistory />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
