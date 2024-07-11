// api.js
import { useState, useEffect } from "react";
import config from "./config";

export const login = async (username, password) => {
  const datat = {
    "username": username,
    "userpass": password,
  };
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/authoz/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datat),
      credentials: 'include'
    });
    const data = await response.json();
    if (!response.ok) {
      return { error: data.message || "Đăng nhập thất bại" };
    }
    return { data };
  } catch (err) {
    return { error: "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin." };
  }
};
export const register = async (username, password,useremail) => {
  const datap = {
    "username": username,
    "userpass": password,
    "email": useremail,
  }
  console.log(datap)
  try {
    const response = await fetch(
      `${config.apiBaseUrl}/api/authoz/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datap),
      }
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return { error: data.message || "Đăng ký thất bại" };
    }
    return { data };
  } catch (err) {
    return { error: "Đăng ký thất bại. Vui lòng kiểm tra lại thông tin." };
  }
};
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
export function useCartList() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const fetchCart = () => {
    fetch(`${config.apiBaseUrl}/api/cart`, {
      method: "GET",
      headers: {
        // Các headers cần thiết nếu có
      },
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchCart(); // Gọi hàm fetchCart khi component được mount
  }, []); // Chỉ gọi 1 lần khi component mount

  return { cart, error, fetchCart, setCart };
}

export const createProduct = async (formData) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/product`, {
      method: "POST",
      body: formData,
      credentials: 'include',
      headers: {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
export const createBrand = async (name) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/brand`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(name), 
    });
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`${data}`);
    }
    return data;
  } catch (error) {
    console.error("Error creating brand:", error);
    throw error;
  }
};
export const createCategory = async (name,id) => {
  const datat = {
    'name': name,
    'parentID' : id
  }
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/category`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(datat), 
    });
    const data = await response.text();
    
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (errors) {
    console.error("Error creating category:", errors);
    throw errors;
  }
};
export const addCart = async (id) => {
  console.log(id)
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/cart`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ idProduct: id }), 
    });
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`${data}`);
    }
    return data;
  } catch (error) {
    console.error("Error cart:", error);
    throw error;
  }
};
export const updateBrand = async (id,newName,newIsActive) => {
  const datat = {
    "id": id,
    "isActive": newIsActive,
    "name":newName
  }
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/brand`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(datat), 
    });
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`${data}`);
    }

    return data;
  } catch (error) {
    console.error("Error creating brand:", error);
    throw error;
  }
};
export const updateCategory = async (id,newName,newIsActive) => {
  const datat = {
    "id": id,
    "name":newName,
    "isActive": newIsActive
  }
  console.log(datat)
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/category`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(datat), 
    });
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`${data}`);
    }

    return data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};
export const updateProduct = async (formData) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/product`, {
      method: "PUT",
      body: formData,
      credentials: 'include',
      headers: {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
export const updateCart = async (id,count) => {
  const datat = {
    'id': id,
    'count' : count
  }
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/cart`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(datat), 
    });
    const data = await response.text();
    
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (errors) {
    console.error("Error creating category:", errors);
    throw errors;
  }
};
export const delCart = async (id) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/cart`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: id, 
    });
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`${data}`);
    }
    return data;
  } catch (error) {
    console.error("Error cart:", error);
    throw error;
  }
};
