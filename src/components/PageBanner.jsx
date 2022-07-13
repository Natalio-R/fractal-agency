import React from "react";
import shape11 from "../assets/shape-1-1.png";
import shape12 from "../assets/shape-1-2.png";
import shape13 from "../assets/shape-1-3.png";
import img2 from "../assets/img-2.jpg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageBanner = () => {
  return (
    <section class="page-banner bg_cover position-relative z-1">
      <div class="shape shape-one scene">
        <span>
          <img src={shape11} alt="" />
        </span>
      </div>
      <div class="shape shape-two scene">
        <span>
          <img src={shape12} alt="" />
        </span>
      </div>
      <div class="shape shape-three scene">
        <span>
          <img src={shape13} alt="" />
        </span>
      </div>
      <div class="shape shape-four scene">
        <span>
          <img src={shape12} alt="" />
        </span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="page-title">
              <h1>Servicios</h1>
              <ul class="breadcrumbs-link">
                <li>
                  <a href="/">Inicio</a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li class="active">Servicios</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="page-banner-img">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
