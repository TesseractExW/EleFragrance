import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { Item } from "../types/product";

const FALLBACK_PRODUCTS: Item[] = [
  {
    id: "#Error",
    name: "#Error",
    description: "#Error",
    cost: 320,
    picture: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
  },
];

export const useProducts = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "fragrances"));
        if (!querySnapshot.empty) {
          const items: Item[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Item, "id">)
          }));
          setProducts(items);
        } else {
          // Defaults to curated collection if remote collection is empty
          setProducts(FALLBACK_PRODUCTS);
        }
      } catch (err: unknown) {
        console.warn("Firestore fetch failed, displaying atelier preview items:", err);
        setProducts(FALLBACK_PRODUCTS);
        setError("Connected in offline showcase mode.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
