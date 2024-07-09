import { useState } from "react";
import { updateBrand } from "~/Context/api";

function UpdateBrand({ brand, onUpdate, onCancel }) {
  const [newName, setNewName] = useState(brand.name);
  const [newIsActive, setNewIsActive] = useState(brand.isActive);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBrand(brand.id,newName,newIsActive );
      onUpdate();
    } catch (error) {
      console.error("Error updating brand:", error);
      setError("Failed to update brand");
    }
  };

  return (
    <div className="card">
      <p style={{ fontSize: "16px", color: "red", textAlign: "center" }}>
        {error}
      </p>
      <div className="card-body">
        <h4 className="card-title">Create Brand</h4>
        <form className="forms-sample" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Brand name.."
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

export default UpdateBrand;
