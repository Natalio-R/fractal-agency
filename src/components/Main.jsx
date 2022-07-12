import React from "react";
import shape1 from "../assets/hero-two-shape-1.png";
import shape2 from "../assets/hero-two-shape-2.png";
import shape3 from "../assets/hero-two-shape-3.png";
import shape21 from "../assets/shape-1.png";
import shape22 from "../assets/shape-2.png";
import hero from "../assets/hero-three-img-1-1.png";
import dotPattern from "../assets/dot-pattern.png";
import { faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <section className="banner position-relative z-1">
      <div className="shape shape-one">
        <span>
          <img src={shape1} alt="" />
        </span>
      </div>
      <div className="shape shape-two">
        <span>
          <img src={shape2} alt="" />
        </span>
      </div>
      <div className="shape shape-three">
        <span>
          <img src={shape3} alt="" />
        </span>
      </div>
      <div className="shape shape-four">
        <span>
          <img src={dotPattern} alt="" />
        </span>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span class="sub-title">
                <FontAwesomeIcon icon={faArrowRight} />
                Bienvenidos a Fractal
              </span>
              <h1>
                Agencia Digital <br />
                de Desarrollo y Diseño
              </h1>
              <p>
                Desarrollamos y diseñamos nuevas ideas para negcios o mejoras
                empresariales, desde diseños de logos hasta diseños de marcas.
              </p>
              <a href="/" className="main-btn arrow-btn">
                Contáctanos &nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <img src={hero} alt="" />
              <div class="hero-shape hero-shape-one animate-float-x">
                <span>
                  <img src={shape21} alt="" />
                </span>
              </div>
              <div class="hero-shape hero-shape-two animate-float-y">
                <span>
                  <img src={shape22} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
