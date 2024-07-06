import HeaderAD from "./HeaderAD";
import NavbarAD from "./NavbarAD";

function AdminLayout({ children }) {
  return (
    <div className="container-scroller">
      <HeaderAD />
      <div className="container-fluid page-body-wrapper">
        <NavbarAD />
        <div className="main-panel">
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
