import { useFetchBrands } from "~/Context/api";
import "./style.css";
import { useState } from "react";
import UpdateBrand from "../UpdateBrand";


function BrandTable() {
  const { brands, error } = useFetchBrands();
  const [editBrand, setEditBrand] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = (brand) => {
    setEditBrand(brand);
    setTimeout(() => {
      document.querySelector('.update-brand-overlay').classList.add('show');
    }, 10);
  };

  const handleUpdate = () => {
    setErrorMessage("");
    document.querySelector('.update-brand-overlay').classList.remove('show');
    setTimeout(() => {
      setEditBrand(null); // Đóng form khi hủy
    }, 300);
  };

  const handleCancel = () => {
    document.querySelector('.update-brand-overlay').classList.remove('show');
    setTimeout(() => {
      setEditBrand(null); // Đóng form khi hủy
    }, 300);
  };

  return (
    <div className="card">
      {editBrand && (
          <div className="update-brand-overlay">
            <div className="update-brand-content">
              <UpdateBrand
                brand={editBrand}
                onUpdate={handleUpdate}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}
      <div className="card-body">
        <h4 className="card-title">User Table</h4>
        <p>Tổng: {brands.length}</p>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name Brand</th>
                <th>isActive</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <button className="btn-action btn-action-c" onClick={() => handleEditClick(item)}>Sửa</button>
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

export default BrandTable;
