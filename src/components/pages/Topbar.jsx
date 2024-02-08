import { Link } from 'react-router-dom';
import undrawProfile from '../../assets/image/undraw_profile.svg';
import Dropdown from 'react-bootstrap/Dropdown';

const Topbar = () => {
  return(
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className='bx bx-menu'></i>
      </button>

      {/* Topbar Title */}
      <div className="d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100">
        <div className="heading">
          <h1 className="h3 text-gray-800">Topbar</h1>
        </div>
      </div>

      <ul className="navbar-nav ml-auto">
        {/* Divider */}
        <div className="topbar-divider d-none d-sm-block"></div>

        <Dropdown className='nav-item no-arrow'>
          <Dropdown.Toggle className='nav-link dropdown-background' id='userDropdown'>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Nopal</span>
            <img className="img-profile rounded-circle" src={undrawProfile} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item to="#">FAQ</Dropdown.Item>
            <Dropdown.Item to="#">Setting</Dropdown.Item>

            {/* Divider */}
            <div className="dropdown-divider"></div>

            <Dropdown.Item>
              <Link to="/">
                <i class='bx bx-log-out text-center mr-2'></i>
                Logout
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  );
}

export default Topbar;