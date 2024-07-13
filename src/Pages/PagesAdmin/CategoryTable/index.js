import React, { useState } from "react";
import { useFetchCategory } from "~/Context/api";
import "./style.css";
import UpdateCategory from "../UpdateCategory";

function CategoryTable() {
  const { categories, error } = useFetchCategory();
  const [editCategory, setEditCategory] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = (category) => {
    setEditCategory(category);
    setTimeout(() => {
      document.querySelector(".update-brand-overlay").classList.add("show");
    }, 10);
  };

  const handleUpdate = () => {
    setErrorMessage("");
    document.querySelector(".update-brand-overlay").classList.remove("show");
    setTimeout(() => {
      setEditCategory(null); // Đóng form khi hủy
    }, 300);
  };

  const handleCancel = () => {
    document.querySelector(".update-brand-overlay").classList.remove("show");
    setTimeout(() => {
      setEditCategory(null); // Đóng form khi hủy
    }, 300);
  };

  const flattenCategories = (categories) => {
    let flatCategories = [];
    const recursiveFlatten = (categories) => {
      for (const category of categories) {
        flatCategories.push(category);
        if (category.subCategories && category.subCategories.length > 0) {
          recursiveFlatten(category.subCategories);
        }
      }
    };
    recursiveFlatten(categories);
    return flatCategories;
  };

  const allCategories = flattenCategories(categories);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Category Table</h4>
        <p>Tổng: {allCategories.length}</p>
        {(errorMessage || error) && (
          <p className="text-danger">{error || errorMessage}</p>
        )}
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      className="btn-action btn-action-c"
                      onClick={() => handleEditClick(category)}
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

      {editCategory && (
        <div className="update-brand-overlay show">
          <div className="update-brand-content">
            <UpdateCategory
              category={editCategory}
              onUpdate={handleUpdate}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryTable;
