import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Price = () => {
  return (
    <section class="pricing-area pricing-area-v1 pb-90">
      <div class="container-1350">
        <div class="pricing-wrapper pt-75 pb-70">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-55">
                <h2>Paquetes de Precios</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="pricing-item pricing-item-one mb-40">
                <div class="pricing-head text-center">
                  <span class="plan">Plan Básico</span>
                  <h2 class="price">
                    19.95<span class="currency">€</span>
                  </h2>
                </div>
                <div class="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul class="pricing-list">
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Design
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Development
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      SEO Optimizations
                    </li>
                    <li class="uncheck">
                      <FontAwesomeIcon icon={faCheck} />
                      Online Support
                    </li>
                    <li class="uncheck">
                      <FontAwesomeIcon icon={faCheck} />
                      Domain &amp; Hosting
                    </li>
                  </ul>
                  <a href="/contact" class="main-btn arrow-btn">
                    Elegir Plan
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="pricing-item pricing-item-one mb-40">
                <div class="ribbon">Popular</div>
                <div class="pricing-head text-center">
                  <span class="plan">Plan Estandard</span>
                  <h2 class="price">
                    49.95<span class="currency">€</span>
                  </h2>
                </div>
                <div class="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul class="pricing-list">
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Design
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Development
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      SEO Optimizations
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Online Support
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Domain &amp; Hosting
                    </li>
                  </ul>
                  <a href="/contact" class="main-btn arrow-btn">
                    Elegir Plan
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="pricing-item pricing-item-one mb-40">
                <div class="pricing-head text-center">
                  <span class="plan">Plan Platino</span>
                  <h2 class="price">
                    99.95<span class="currency">€</span>
                  </h2>
                </div>
                <div class="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul class="pricing-list">
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Design
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Web Development
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      SEO Optimizations
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Online Support
                    </li>
                    <li class="check">
                      <FontAwesomeIcon icon={faCheck} />
                      Domain &amp; Hosting
                    </li>
                  </ul>
                  <a href="/contact" class="main-btn arrow-btn">
                    Elegir Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
