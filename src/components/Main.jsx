import React from "react";

const Main = () => {
  return (
    <section className="hero-banner-v1 position-relative">
      <div className="bg-one"></div>
      <div className="bg-two"></div>
      <div className="hero-img hero-img-one scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/hero/hero-one-img-1.jpg"
            alt="Hero image"
            className="wow fadeInLeft animated"
          />
        </span>
      </div>
      <div className="hero-img hero-img-two scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/hero/hero-one-img-2.jpg"
            alt="Hero image"
            className="wow fadeInLeft animated"
          />
        </span>
      </div>
      <div className="hero-img hero-img-three scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/circle-logo-1.png"
            alt="Hero image"
            className="wow fadeInLeft animated"
          />
        </span>
      </div>
      <div className="shape shape-one scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png"
            alt="shape"
          />
        </span>
      </div>
      <div className="shape shape-two scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-2.png"
            alt="shape"
          />
        </span>
      </div>
      <div className="shape shape-three scene">
        <span data-depth=".5">
          <img
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-3.png"
            alt="shape"
          />
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="content">
              <h1>Agencia de Desarrollo y Diseño</h1>
              <p>
                Sit amet consectetur adipiscing elit sed do eiusmod tem
                porincididunt ut labore et dolore magna aliqua. Quis psum
                suspendisse ultrices gravida commodo viverra
              </p>
              <a href="/" className="main-btn arrow-btn">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
