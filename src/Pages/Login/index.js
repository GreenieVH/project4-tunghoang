import images from "~/Assets/images";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const location = useLocation();

  return (
    <main className="main">
      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{
          backgroundImage: `url(${images.login_bg})`,
        }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <Link
                    to="/login/signin"
                    className={`nav-link ${location.pathname === '/login/signin' ? 'active' : ''}`}
                    id="signin-tab-2"
                    data-toggle="tab"
                    href="#signin-2"
                    role="tab"
                    aria-controls="signin-2"
                    aria-selected={location.pathname === '/login/signin' ? 'true' : 'false'}
                  >
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login/signup"
                    className={`nav-link ${location.pathname === '/login/signup' ? 'active' : ''}`}
                    id="register-tab-2"
                    data-toggle="tab"
                    href="#register-2"
                    role="tab"
                    aria-controls="register-2"
                    aria-selected={location.pathname === '/login/signup' ? 'true' : 'false'}
                  >
                    Register
                  </Link>
                </li>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
