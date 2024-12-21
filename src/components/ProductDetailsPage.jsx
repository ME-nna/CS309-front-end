import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToWishlist = () => {
    if (!product) {
      alert("Product details are not loaded yet.");
      return;
    }

    if (!wishlist.some((item) => item.id === product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Product added to wishlist!");
    } else {
      alert("This product is already in your wishlist.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {/* Product Info */}
        <div className="product-info">
          <h1 className="products-title">{product.title}</h1>
          <p className="products-category">
            <strong className="category-label">Category:</strong>{" "}
            {product.category}
          </p>
          <p className="products-description">{product.description}</p>
          <p className="products-price">
            <strong>Price:</strong> ${product.price}
          </p>

          <button className="add-to-wishlist-button" onClick={addToWishlist}>
            Add to Wishlist
          </button>
          <button className="add-to-cart-button"> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
