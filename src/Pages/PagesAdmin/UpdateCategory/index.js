import { useState } from "react";
import { updateCategory } from "~/Context/api";

function UpdateCategory({ category, onUpdate, onCancel }) {
  const [newName, setNewName] = useState(category.name);
  const [newIsActive, setNewIsActive] = useState(category.isActive);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateCategory(category.id, newName, newIsActive);
      onUpdate({ ...category, name: newName, isActive: newIsActive }); // Cập nhật danh mục ngay lập tức
    } catch (error) {
      console.error("Error updating category:", error);
      setError("Failed to update category");
    }
  };

  return (
    <div className="card">
      <p style={{ fontSize: "16px", color: "red", textAlign: "center" }}>
        {error}
      </p>
      <div className="card-body">
        <h4 className="card-title">Update Category</h4>
        <form className="forms-sample" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Category name.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="isActive">Is Active</label>
            <select
              id="isActive"
              className="form-control"
              value={newIsActive}
              onChange={(e) => setNewIsActive(e.target.value === "true")}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <button type="button" className="btn btn-light" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCategory;
