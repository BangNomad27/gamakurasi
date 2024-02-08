import { Link } from "react-router-dom";
// import "boxicons";

const Sidebar = () => {
  return(
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className='bx bxl-xing'></i>
        </div>
        <div className="sidebar-brand-text mx-3">PT Gajah Asia Mandiri</div>
      </Link>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">
        Menu
      </div>

      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i className='bx bxs-home'></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">
        User Management
      </div>

      <li className="nav-item active">
        <Link className="nav-link" to="/workspace">
          <i className='bx bxs-tachometer' ></i>
          <span>My Workspace</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;