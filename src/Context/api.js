// api.js
import { useState, useEffect } from "react";
import config from "./config";

export function useFetchBrands() {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${config.apiBaseUrl}/api/brand`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBrands();
  }, []);

  return { brands, error };
}
export function useFetchCategory() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${config.apiBaseUrl}/api/category`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return {categories,error}
}
export const createProduct = async (formData) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/product`, {
      method: "POST",
      body: formData,
      headers: {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
export function useProductList() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${config.apiBaseUrl}/api/product`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return {product,error}
}