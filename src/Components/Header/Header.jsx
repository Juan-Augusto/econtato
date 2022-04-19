import { Link } from "react-router-dom";
import './HeaderStyle.css';
import Logo from '../../Assets/MainLogo.png';
import { CategoriesSection } from "../Categories/CategoriesSection";
export const Header = () => {
  const NavbarItems = ["Home", "About", "Link"];
  const DropdownItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="main--header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light main--presentation">
        <div className="main--presentation">
          <div className="main--logo">
            <Link class="navbar-brand" to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav" style={{display: 'flex', justifyContent: 'space-between', margin: 0}}>
              {NavbarItems.map((navItem, navIndexKey) => {
                return (
                  <li className="nav-item" key={navIndexKey}>
                    <Link className="nav-link active" to="/">
                      {navItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {DropdownItems.map((dropdownItem, dropdownIndexKey) => {
                    return (
                      <li key={dropdownIndexKey} className="dropdown-item">
                        <Link className="dropdown-item" to="/">
                          {dropdownItem}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
      <div className="search--bar">
        <form action="">
          <input type="search" placeholder="Procure um serviço"/>
          <button>
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <CategoriesSection/>
    </div>
  );
};
