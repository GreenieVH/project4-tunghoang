import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "~/Context/api";

function Signin() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      const response = await login(username, password);
      if (response?.error) {
        setError(response.error);
      } else if (response?.data) {
        setError("");
        alert("Đăng nhập thành công!!");
        navigate("/product");  // Điều hướng về trang /product
      } else {
        setError("Đã xảy ra lỗi không xác định.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };
  return (
    <div className="tab-content">
      <div
        className="tab-pane fade show active"
        id="signin-2"
        role="tabpanel"
        aria-labelledby="signin-tab-2"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="singin-email-2">Username or email address *</label>
            <input
              type="text"
              className="form-control"
              id="singin-email-2"
              name="singin-email"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="singin-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="singin-password-2"
              name="singin-password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          {/* End .form-group */}
          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              <span>LOG IN</span>
              <i className="icon-long-arrow-right" />
            </button>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember-2"
              />
              <label
                className="custom-control-label"
                htmlFor="signin-remember-2"
              >
                Remember Me
              </label>
            </div>
            {/* End .custom-checkbox */}
            <Link to="/1" className="forgot-link">
              Forgot Your Password?
            </Link>
          </div>
          {/* End .form-footer */}
        </form>
        <div className="form-choice">
          <p className="text-center">or sign in with</p>
          <div className="row">
            <div className="col-sm-6">
              <Link to="/" className="btn btn-login btn-g">
                <i className="icon-google" />
                Login With Google
              </Link>
            </div>
            {/* End .col-6 */}
            <div className="col-sm-6">
              <Link to="/" className="btn btn-login btn-f">
                <i className="icon-facebook-f" />
                Login With Facebook
              </Link>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .form-choice */}
      </div>
    </div>
  );
}


export default Signin;
