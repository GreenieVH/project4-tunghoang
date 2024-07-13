import { useState } from "react";
import { createBrand } from "~/Context/api";

function CreateBrand() {
  const [brandname, setBrandname] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const data = await createBrand(brandname);
      console.log("Brand created:", data);
      setError("");
      alert('Thêm thành công!')
      setBrandname('')
    } catch (error) {
      console.error("Error creating brand:", error);
      setError(error.message);
    }
  }

  return (
    <div className="card">
      <p style={{fontSize:'16px',color:'red',textAlign:'center'}}>{error}</p>
      <div className="card-body">
        <h4 className="card-title">Create Brand</h4>
        <form className="forms-sample" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={brandname}
              onChange={(e) => setBrandname(e.target.value)}
              placeholder="Brand name.."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary me-2"
          >
            Submit
          </button>
          <button type="button" className="btn btn-light">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBrand;
