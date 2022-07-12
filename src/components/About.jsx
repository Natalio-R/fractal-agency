import React from "react";
import about3 from "../assets/about-3.jpg";
import shape5 from "../assets/shape-5.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section class="about-area about-area-v2 pt-130">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="img-holder mb-50">
              <div class="shape shape-one animate-float-y">
                <span>
                  <img src={shape5} alt="" />
                </span>
              </div>
              <img src={about3} alt="" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="text-wrapper mb-50">
              <div class="section-title mb-25">
                <h2>Somos agencia creativa desde 2020</h2>
                <p class="blue-dark">
                  La agencia de diseño profesional proporciona soluciones.
                </p>
              </div>
              <p>
                Por otra parte, denuncie con justa indignación a los hombres que
                se dejan seducir y desmoralizar por los encantos del placer del
                momento, tan cegados por el deseo que no pueden prever.
              </p>
              <ul class="list-style-one mb-40">
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Agencia Creativa Digital
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Soluciones de Problemas Profesionales
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Desarrollo &amp; Diseño Web
                </li>
              </ul>
              <a href="/about" class="main-btn bordered-btn btn-blue">
                Aprender más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
