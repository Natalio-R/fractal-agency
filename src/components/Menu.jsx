import React from "react";
import logo from "../assets/fractal-color.png";
import dot from "../assets/dot.png";
import {
  faXmark,
  faSearch,
  faShoppingCart,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <>
      <div class="offcanvas-panel">
        <div class="panel-overlay"></div>
        <div class="offcanvas-panel-inner">
          <div class="panel-logo">
            <a href="/">
              <img src={logo} alt="Logo de Fractal Agency" />
            </a>
          </div>
          <div class="about-us">
            <h5 class="panel-widget-title">Acerca de</h5>
            <p>
              Agencia Digital especializada en la creación de nuevas marcas para
              el mercado empresarial, diseño sde webs, tiendas online e incluso
              agencias digitales.
            </p>
          </div>
          <div class="contact-us">
            <h5 class="panel-widget-title">Contacto</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Almoradí 03160, Alicante.
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:nataliorabasconavarro@gmail.com">
                  nataliorabasconavarro@gmail.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:34634775093">(+34) 634 775 093</a>
              </li>
            </ul>
          </div>
          <a href="#" class="panel-close">
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </div>
      </div>
      <header className="theme-header transparent-header">
        <div className="header-navigation navigation-style-v2 breakpoint-on">
          <div className="nav-overlay"></div>
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <a href="/" className="brand-logo">
                  <img src={logo} alt="Logotipo Fractal Agency" />
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
                        placeholder="Buscar aquí..."
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
                      <a href="/" className="nav-link">
                        Inicio
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/services" className="nav-link">
                        Servicios
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/about" className="nav-link">
                        Sobre
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/portfolio" className="nav-link">
                        Portafolio
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/prices" className="nav-link">
                        Precios
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
                  <li class="cart-item">
                    <a href="/">
                      <span class="number">0</span>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                  </li>
                  <li className="bar-item">
                    <a href="#">
                      <img src={dot} alt="" />
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
    </>
  );
};

export default Menu;
