import React from "react";
import shape9 from "../assets/shape-9.png";

const PriceV2 = () => {
  return (
    <section class="pricing-area pricing-area-v1 dark-blue-bg pattern-bg pt-130 pb-120">
      <div class="shape shape-one scene">
        <span>
          <img src={shape9} alt="" />
        </span>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title section-title-white text-center mb-55">
              <span class="sub-title st-one">Pricing Plan</span>
              <h2>Pricing Package</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="pricing-item pricing-item-two bg-white mb-40">
              <div class="pricing-head text-center">
                <span class="plan">Basic Plan</span>
                <h2 class="price">
                  <span class="currency">$</span>16.95
                </h2>
              </div>
              <div class="pricing-body">
                <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                <ul class="pricing-list">
                  <li class="check">Web Design</li>
                  <li class="check">Web Development</li>
                  <li class="check">SEO Optimizations</li>
                  <li class="uncheck">Online Support</li>
                  <li class="uncheck">Domain &amp; Hosting</li>
                </ul>
                <a
                  href="service-details.html"
                  class="main-btn arrow-btn bordered-btn btn-blue"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="pricing-item pricing-item-two bg-white mb-40">
              <div class="ribbon">Popular</div>
              <div class="pricing-head text-center">
                <span class="plan">Standard Plan</span>
                <h2 class="price">
                  <span class="currency">$</span>46.95
                </h2>
              </div>
              <div class="pricing-body">
                <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                <ul class="pricing-list">
                  <li class="check">Web Design</li>
                  <li class="check">Web Development</li>
                  <li class="check">SEO Optimizations</li>
                  <li class="check">Online Support</li>
                  <li class="check">Domain &amp; Hosting</li>
                </ul>
                <a
                  href="service-details.html"
                  class="main-btn arrow-btn bordered-btn btn-blue"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="pricing-item pricing-item-two bg-white mb-40">
              <div class="pricing-head text-center">
                <span class="plan">Silver Plan</span>
                <h2 class="price">
                  <span class="currency">$</span>96.95
                </h2>
              </div>
              <div class="pricing-body">
                <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                <ul class="pricing-list">
                  <li class="check">Web Design</li>
                  <li class="check">Web Development</li>
                  <li class="check">SEO Optimizations</li>
                  <li class="check">Online Support</li>
                  <li class="check">Domain &amp; Hosting</li>
                </ul>
                <a
                  href="service-details.html"
                  class="main-btn arrow-btn bordered-btn btn-blue"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceV2;
