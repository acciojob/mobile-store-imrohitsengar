import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import initialProducts from "./ProductData";

function AdminProductDetails({ products = initialProducts, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id == id);

  const [title, setTitle] = useState(product ? (product.title || product.name) : "");
  const [description, setDescription] = useState(product ? (product.description || product.desc) : "");
  const [image, setImage] = useState(product ? (product.image || product.img) : "");
  const [price, setPrice] = useState(product ? product.price : "");

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button
          onClick={() => navigate("/admin")}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Back to Admin Panel
        </button>
      </div>
    );
  }

  const Delete = () => {
    if (setProducts) {
      setProducts((prev) => prev.filter((p) => p.id != id));
    }
    navigate("/admin");
  };

  const Save = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (setProducts) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id == id
            ? {
                ...p,
                title,
                name: title,
                price: Number(price),
                image,
                img: image,
                description,
                desc: description,
              }
            : p
        )
      );
    }
    navigate("/admin");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "24px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "24px", textAlign: "center" }}>Edit Product #{id}</h2>

      <form onSubmit={Save} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px 12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>Price (₹):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%", padding: "8px 12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: "100%", padding: "8px 12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }}
          />
          {image && (
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <img src={image} alt="Preview" style={{ height: "100px", objectFit: "contain" }} />
            </div>
          )}
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            style={{ width: "100%", padding: "8px 12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }}
            required
          />
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          <button
            type="button"
            onClick={Save}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={Delete}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminProductDetails;
