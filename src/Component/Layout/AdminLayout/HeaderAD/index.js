import images from '~/Assets/images';
import './style.css'

function HeaderAD() {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
    <div className="me-3">
      <button
        className="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-bs-toggle="minimize"
      >
        <span className="icon-menu" />
      </button>
    </div>
    <div>
      <a className="navbar-brand brand-logo" href="">
        <img src={images.logo} alt="logo" />
      </a>
    </div>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-top">
    <ul className="navbar-nav">
      <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
        <h1 className="welcome-text">
          Good Morning, <span className="text-black fw-bold">Admin</span>
        </h1>
        <h3 className="welcome-sub-text">
          Your performance summary this week{" "}
        </h3>
      </li>
    </ul>
    <ul className="navbar-nav ms-auto">
      
      
      <li className="nav-item">
        <form className="search-form" action="#">
          <i className="icon-search" />
          <input
            type="search"
            className="form-control1"
            placeholder="Search Here"
            title="Search here"
          />
        </form>
      </li>
      <li className="nav-item dropdown d-none d-lg-block user-dropdown">
        <a
          className="nav-link"
          href=""
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            className="img-xs rounded-circle"
            src={images.face17}
            alt=""
          />{" "}
        </a>
      </li>
    </ul>
    <button
      className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
      type="button"
      data-bs-toggle="offcanvas"
    >
      <span className="mdi mdi-menu" />
    </button>
  </div>
</nav>

  );
}

export default HeaderAD;
