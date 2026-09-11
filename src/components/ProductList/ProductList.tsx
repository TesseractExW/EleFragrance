// src/components/ProductList/ProductList.tsx
import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <section className="catalogue-section" id="catalogue">
      <div className="catalogue-header">
        <span className="section-label">FIRESTORE ARCHIVE</span>
        <h2 className="section-heading">Curated Extraits</h2>
        <p className="section-subheading">Bottled in limited annual runs of 500 numbered flacons.</p>
      </div>

      {loading ? (
        <div className="status-container">
          <div className="loader-crest">✦</div>
          <p>Accessing Private Reserve Database...</p>
        </div>
      ) : (
        <>
          {error && <p className="status-note">{error}</p>}
          <div className="product-grid">
            {products.map((item) => (
              <ProductCard key={item.id || item.name} product={item} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
