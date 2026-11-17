import React from "react";
import { Link, useParams } from "react-router-dom";
import initialProducts from "./ProductData";

function ProductDetails({ products = initialProducts }) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p style={{ color: "#6c757d", margin: "12px 0 24px" }}>
          We could not find the product you requested.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
          }}
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "32px",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
        textAlign: "center",
      }}
    >
      <img
        src={product.image || product.img}
        alt={product.title || product.name}
        style={{
          width: "220px",
          height: "260px",
          objectFit: "contain",
          marginBottom: "24px",
        }}
      />
      <h2 style={{ fontSize: "24px", marginBottom: "12px", color: "#212529" }}>
        {product.title || product.name}
      </h2>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#198754",
          marginBottom: "18px",
        }}
      >
        Price: ₹{product.price}
      </div>
      <p
        style={{
          color: "#495057",
          lineHeight: "1.7",
          fontSize: "16px",
          marginBottom: "30px",
          maxWidth: "550px",
          margin: "0 auto 30px auto",
        }}
      >
        {product.description || product.desc}
      </p>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Link
          to="/"
          style={{
            padding: "10px 24px",
            backgroundColor: "#6c757d",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Other Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
