import React from "react";
import initialProducts from "./ProductData";
import { Link } from "react-router-dom";

function AdminPanel({ products = initialProducts, setProducts }) {
  const handleDelete = (id) => {
    if (setProducts) {
      setProducts((prev) => prev.filter((p) => p.id != id));
    }
  };

  return (
    <div style={{ maxWidth: "850px", margin: "30px auto", padding: "0 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Admin Panel - Product Management</h2>
      <p style={{ textAlign: "center", color: "#6c757d", marginBottom: "20px" }}>
        Total Products: {products.length}
      </p>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", color: "#6c757d", marginTop: "30px" }}>
          No products available.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fafafa",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1 }}>
                  <img
                    src={product.image || product.img}
                    alt={product.title || product.name}
                    style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "4px" }}
                  />
                  <div>
                    <h4 style={{ margin: "0 0 6px 0", color: "#212529" }}>
                      {product.title || product.name}
                    </h4>
                    <div style={{ color: "#198754", fontWeight: "600" }}>₹{product.price}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    to={`/admin/product/${product.id}`}
                    style={{
                      backgroundColor: "#0d6efd",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
