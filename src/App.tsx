// src/App.tsx
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { ProductList } from "./components/ProductList/ProductList";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <ProductList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
