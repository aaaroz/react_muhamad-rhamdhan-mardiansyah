import React from "react";
import navbarBrand from "../assets/navbar-brand.png";

const Header = (props) => {
  return (
    <header>
      {/* navbar */}
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand ms-5 ps-5" href="/#">
            <img src={navbarBrand} alt="navbar-brand" href="/#" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* navbar item */}
          <div
            className="collapse navbar-collapse justify-content-end me-5 pe-5"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link fs-5 fw-medium" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-medium" href="/#">
                  Product
                </a>
              </li>
              <li className="nav-item" onClick={props.scrollToAbout}>
                <a className="nav-link fs-5 fw-medium" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={props.scrollToContact}>
                <a className="nav-link fs-5 fw-medium" href="/#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of navbar */}
    </header>
  );
};

export default Header;
