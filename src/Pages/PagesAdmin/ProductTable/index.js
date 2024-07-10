import { useProductList } from "~/Context/api";
import "./style.css";
import config from "~/Context/config";
import { useState } from "react";
import UpdateProduct from "../UpdateProduct";

function ProductTable() {
  const { product, error: errorProduct } = useProductList();
  const [editProduct, setEditProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = (product) => {
    setEditProduct(product);
    setTimeout(() => {
      document.querySelector(".update-brand-overlay").classList.add("show");
    }, 10);
  };
  const handleUpdate = () => {
    setErrorMessage("");
    document.querySelector(".update-brand-overlay").classList.remove("show");
    setTimeout(() => {
      setEditProduct(null);
    }, 300);
  };
  const handleCancel = () => {
    document.querySelector(".update-brand-overlay").classList.remove("show");
    setTimeout(() => {
      setEditProduct(null); // Đóng form khi hủy
    }, 300);
  };

  return (
    <div className="card">
      {editProduct && (
                    <div className="update-brand-overlay">
                      <div className="update-brand-content">
                        <UpdateProduct
                          product={editProduct}
                          onUpdate={handleUpdate}
                          onCancel={handleCancel}
                        />
                      </div>
                    </div>
                  )}
      <p>{errorMessage|| errorProduct}</p>
      <div className="card-body">
        <h4 className="card-title">Product Table</h4>
        <span>Tong SP:{product.length}</span>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Describe</th>
                <th>Price</th>
                <th>CountProduct</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="py-1">
                    <img
                      src={`${config.apiBaseUrl + "/"}${item.img}`}
                      style={{ width: "50px" }}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.describe}</td>
                  <td>{item.price}</td>
                  <td>{item.countProduct}</td>
                  <td>{item.isActive+""}</td>
                  <td>
                    <button
                      className="btn-action btn-action-c"
                      onClick={() => handleEditClick(item)}
                    >
                      Sửa
                    </button>
                    <button className="btn-action btn-action-d">Xóa</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
