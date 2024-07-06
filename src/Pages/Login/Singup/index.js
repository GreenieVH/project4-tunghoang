import { useState } from "react";
import { Link } from "react-router-dom";

function Singup() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");

  const register = async (username, password,useremail) => {
    const datap = {
      "username": username,
      "userpass": password,
      "email": useremail,
    }
    console.log(datap)
    try {
      const response = await fetch(
        "http://26.78.185.194:5050/api/authoz/register",
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
        setError(data.message)
        return
      }
      setError("");
      alert("Đăng ký thành công!!")
    } catch (err) {
      setError("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    if (!username || !password || !repassword || !useremail) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== repassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    register(username, password,useremail);
  }

  return (
    <div className="tab-content">
      <div
        className="tab-pane fade show active"
        id="register-2"
        role="tabpanel"
        aria-labelledby="register-tab-2"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-email-2">Your Name*</label>
            <input
              type="text"
              className="form-control"
              id="register-email-2"
              name="register-email"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email-2">Your email*</label>
            <input
              type="email"
              className="form-control"
              id="register-email-2"
              name="register-email"
              required=""
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="register-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="register-password-2"
              name="register-password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password-2">Repassword *</label>
            <input
              type="password"
              className="form-control"
              id="register-password-2"
              name="register-password"
              required=""
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
          {/* End .form-group */}
          {error && <p>{error}</p>}
          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              <span>Register</span>
              <i className="icon-long-arrow-right" />
            </button>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="register-policy-2"
                required=""
              />
              <label
                className="custom-control-label"
                htmlFor="register-policy-2"
              >
                I agree to the{" "}
                <Link to="#" style={{ marginLeft: "5px" }}>
                  privacy policy
                </Link>{" "}
                *
              </label>
            </div>
            {/* End .custom-checkbox */}
          </div>
          {/* End .form-footer */}
        </form>
        <div className="form-choice">
          <p className="text-center">or sign in with</p>
          <div className="row">
            <div className="col-sm-6">
              <Link to="#" className="btn btn-login btn-g">
                <i className="icon-google" />
                Login With Google
              </Link>
            </div>
            {/* End .col-6 */}
            <div className="col-sm-6">
              <Link to="#" className="btn btn-login  btn-f">
                <i className="icon-facebook-f" />
                Login With Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
