import React from "react";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faMedium,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer class="footer-area footer-gradient-bg position-relative z-1 pt-185">
      <div class="shape">
        <span></span>
      </div>
      <div class="container">
        <div class="footer-widget pb-40">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget footer-nav-widget mb-40">
                <h4 class="widget-title">Servicios</h4>
                <ul class="widget-nav">
                  <li>
                    <a href="services.html">Diseño UX/UI</a>
                  </li>
                  <li>
                    <a href="services.html">Desarrollo Web</a>
                  </li>
                  <li>
                    <a href="services.html">Optimización SEO</a>
                  </li>
                  <li>
                    <a href="services.html">Diseño de Producto</a>
                  </li>
                  <li>
                    <a href="services.html">Diseño de Logo</a>
                  </li>
                  <li>
                    <a href="services.html">Diseño de Marca</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget footer-nav-widget mb-40">
                <h4 class="widget-title">Links</h4>
                <ul class="widget-nav">
                  <li>
                    <a href="services.html">Sobre la Agencia</a>
                  </li>
                  <li>
                    <a href="services.html">ÚLtimas novedades &amp; Blog</a>
                  </li>
                  <li>
                    <a href="services.html">Conoce al Team</a>
                  </li>
                  <li>
                    <a href="services.html">Servicios Populares</a>
                  </li>
                  <li>
                    <a href="services.html">Testimonios</a>
                  </li>
                  <li>
                    <a href="services.html">¿Ncesitas presupueto?</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="widget social-widget mb-40">
                <h4 class="widget-title">Síguenos</h4>
                <ul class="social-nav">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faBehance} />
                      Behance
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faMedium} />
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="widget newsletter-widget mb-40">
                <div class="newsletter-content">
                  <h3>Subscribe Our Newsletter</h3>
                  <p>
                    Natus errorsit voluptatem accusa dolore mque quae{" "}
                    <a href="#">abillo inventore verita</a> achitec beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <form>
                    <div class="form_group">
                      <input
                        type="email"
                        class="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                      <button class="main-btn">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="row">
            <div class="col-lg-6">
              <div class="copyright-text">
                <p>© 2022. All rights reserved design by Webtend</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="footer-nav float-lg-right">
                <ul>
                  <li>
                    <a href="services.html">Setting &amp; Privacy </a>
                  </li>
                  <li>
                    <a href="services.html">Faqs</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
