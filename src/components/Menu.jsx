import React from "react";
import logo from "../assets/fractal-color.png";
import dot from "../assets/dot.png";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <header className="theme-header transparent-header">
      <div className="header-navigation navigation-style-v1">
        <div className="nav-overlay"></div>
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <a href="/" className="brand-logo">
                <img src={logo} alt="Logotipo Fractal" />
              </a>
            </div>
            <div className="nav-menu nav-ml-auto">
              <div className="navbar-close">
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <div className="nav-search">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      class="form_control"
                      placeholder="Search Here"
                      name="email"
                      required=""
                    />
                    <button class="search-btn">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </form>
              </div>
              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <a href="/" className="active nav-link">
                      Inicio
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/services" className="nav-link">
                      Servicios
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/contact" className="nav-link">
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right-nav">
              <ul>
                <li className="cart-item"></li>
                <li className="bar-item">
                  <a href="#">
                    <img src={dot} />
                  </a>
                </li>
                <li className="navbar-toggle-btn">
                  <div className="navbar-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
