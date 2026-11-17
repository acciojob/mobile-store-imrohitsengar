import React, { useState } from "react";
import initialProducts from "./ProductData";
import { Link } from "react-router-dom";

function ProductList({ products = initialProducts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const title = (product.title || product.name || "").toLowerCase();
    const description = (product.description || product.desc || "").toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || description.includes(query);
  });

  return (
    <div style={{ padding: "30px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "24px",
          color: "#212529",
          fontWeight: "600",
        }}
      >
        Available Products
      </h2>

      {/* Search Input Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
        <input
          id="search-input"
          data-testid="search-input"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "10px 16px",
            fontSize: "16px",
            border: "1px solid #ced4da",
            borderRadius: "24px",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", color: "#6c757d", fontSize: "18px", marginTop: "40px" }}>
          No products found matching "{searchQuery}"
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  width: "250px",
                  height: "360px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  boxSizing: "border-box",
                }}
              >
                <Link to={`/products/${product.id}`} style={{ display: "block", width: "100%", textAlign: "center" }}>
                  <img
                    src={product.image || product.img}
                    alt={product.title || product.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                </Link>

                <div style={{ textAlign: "center", width: "100%" }}>
                  <Link
                    to={`/products/${product.id}`}
                    style={{
                      color: "#0d6efd",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: "600",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      marginBottom: "8px",
                      lineHeight: "1.3",
                      minHeight: "38px",
                    }}
                    title={product.title || product.name}
                  >
                    {product.title || product.name}
                  </Link>

                  <div
                    style={{
                      color: "#198754",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Price: ₹{product.price}
                  </div>
                </div>

                <Link
                  to={`/products/${product.id}`}
                  style={{
                    width: "100%",
                    backgroundColor: "#6c757d",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "9px 0",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Buy
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
