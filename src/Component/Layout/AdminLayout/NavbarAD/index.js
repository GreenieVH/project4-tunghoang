import { Link } from "react-router-dom";
import "./style.css";

function NavbarAD() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav-1">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title bts">Back to shop</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createproduct">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title">Create product</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/producttable">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title">Product table</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usertable">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title">User table</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarAD;
