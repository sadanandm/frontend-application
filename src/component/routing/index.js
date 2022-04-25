import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../../pages/homePage";
import Product from "../../pages/product";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
