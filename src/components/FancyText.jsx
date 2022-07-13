import React from "react";
import img5 from "../assets/img-5.png";

const FancyText = () => {
  return (
    <section class="fancy-text-block fancy-text-block-v2 pt-210 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="img-holder mb-50">
              <img src={img5} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-wrapper mb-50">
              <div class="section-title mb-30">
                <span class="sub-title st-one">What We Do</span>
                <h2>Popular Solution For Growth Business</h2>
                <p class="blue-dark">
                  Professional Design Agency to provide solutions
                </p>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptate
                accusantium doloremque laudantium, totam rem aperiam eaquepsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enimpsam luptate quia voluptas
                aspernatur aut fugitdolor sit amet
              </p>
              <a href="about.html" class="main-btn arrow-btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyText;
