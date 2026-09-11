// src/components/ProductCard/ProductCard.tsx
import React from "react";
import { Item } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Item;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.picture}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <div className="product-overlay">
          <span className="product-view-text">Flacon de Parfum</span>
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.cost.toFixed(2)}</span>
          <button className="product-order-btn">Acquire</button>
        </div>
      </div>
    </article>
  );
};
