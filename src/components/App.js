import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import initialProducts from "./ProductData";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import AdminProductDetails from "./AdminProductDetails";

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "18px 24px",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Link
          to="/"
          id="nav-home"
          style={{
            padding: "8px 22px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#212529",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          HOME
        </Link>
        <Link
          to="/admin"
          id="nav-admin"
          style={{
            padding: "8px 22px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#212529",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          ADMIN
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        <Route path="/Admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        <Route
          path="/admin/product/:id"
          element={<AdminProductDetails products={products} setProducts={setProducts} />}
        />
        <Route
          path="/admin/products/:id"
          element={<AdminProductDetails products={products} setProducts={setProducts} />}
        />
        <Route
          path="/Admin/product/:id"
          element={<AdminProductDetails products={products} setProducts={setProducts} />}
        />
        <Route
          path="/Admin/products/:id"
          element={<AdminProductDetails products={products} setProducts={setProducts} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
