import React from "react";
import logo from "../../assets/images/global/logo.png";

const Header = () => {
  return (
    <div className="navbar__section">
      <div className="container">
        <div className="nav__area">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand me-2" href="#">
                <img src={logo} alt="logo" />
              </a>
              <div className="logo-name">
                <a className="logo-title">CertificateofService.com</a>
                <a className="logo-slogan">
                  accelerating te velocity of your practice!
                </a>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Schedule a free demo
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More Info
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          The Envelope
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Reasons to Outsource
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Due Process
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Customer Service
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mail Schedule
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Value of Time
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The Backstory
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="button-parent">
                  <button className="btn btn-success" type="submit">
                    Log In
                  </button>
                  <button className="btn btn-success custom" type="submit">
                    Create account
                  </button>
                  <button className="btn btn-success custom" type="submit">
                    <i className="fa-regular fa-comment-dots"></i> Let’s chat
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
