import './style.css'

function UpdateProduct() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Update Product</h4>
        <p className="card-description">Basic form layout</p>
        <form className="forms-sample">
          <div className="form-group">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername1"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputConfirmPassword1">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputConfirmPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check form-check-flat form-check-primary">
            <label className="form-check-label">
              Image
              <input type="file" className="form-control" />
            </label>
            <image src="" />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <button className="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
