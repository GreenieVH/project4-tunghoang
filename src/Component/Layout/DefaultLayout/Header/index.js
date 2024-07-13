import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import images from "~/Assets/images";
import { logout, useCartList } from "~/Context/api";
import { UserContext } from "~/Context/userContext";
import "./style.css";

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCartList();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchCart(); 
  // }, [cart]); 
  
  const calculateTotalItems = () => {
    if (cart && cart.length) {
      return cart.length;
    }
    return 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 250); // Điều chỉnh giá trị 100 theo nhu cầu của bạn
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [setUser]);

  const handleLogout = async () => {
    localStorage.removeItem("user");
    // Xóa cookie nếu có
    await logout();
    setUser(null);
    navigate('/login/signin');
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <div className="header-dropdown">
                <a href="#">Eng</a>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <a href="tel:#">
                        <i className="icon-phone" />
                        Call: +0123 456 789
                      </a>
                    </li>
                    <li>
                      {user ? (
                        <div>
                          <span style={{ paddingRight: "10px" }}>
                            {user.userName}
                          </span>
                          <button className="btn-logout" onClick={handleLogout}>
                            LOGOUT
                          </button>
                        </div>
                      ) : (
                        <Link
                          to="/login/signin"
                          href="#signin-modal"
                          data-toggle="modal"
                        >
                          <i className="icon-user" />
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`header-middle ${
            isScrolled ? "sticky header-middle-small" : ""
          }`}
        >
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <Link to="/" className="logo">
                <img
                  src={images.logo}
                  alt="Molla Logo"
                  width={105}
                  height={25}
                />
              </Link>
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li
                    className={`megamenu-container ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`${
                      location.pathname === "/product" ? "active" : ""
                    }`}
                  >
                    <Link to="/product">Shop</Link>
                  </li>
                  <li
                    className={`${
                      location.pathname.startsWith("/about") ? "active" : ""
                    }`}
                  >
                    <Link to="/about" className="sf-with-ul">
                      Pages
                    </Link>
                    <ul>
                      <li
                        className={`${
                          location.pathname === "/about" ? "active" : ""
                        }`}
                      >
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        className={`${
                          location.pathname === "/contact" ? "active" : ""
                        }`}
                      >
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${
                      location.pathname === "/blog" ? "active" : ""
                    }`}
                  >
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              {/* <div className="header-search">
                <a
                  href="#"
                  className="search-toggle"
                  role="button"
                  title="Search"
                >
                  <i className="icon-search" />
                </a>
                <form action="" method="get">
                  <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search in..."
                      required=""
                    />
                  </div>
                </form>
              </div> */}
              <div className="dropdown cart-dropdown">
                <Link
                  to="/cart"
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <i className="icon-shopping-cart" />
                  <span className="cart-count">{calculateTotalItems()}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
