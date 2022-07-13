import React from "react";
import img2 from "../assets/img-3.jpg";
import shape5 from "../assets/shape-5.png";
import shape7 from "../assets/shape-7.png";
import shape8 from "../assets/shape-8.png";

const Skill = () => {
  return (
    <div class="skill-area skill-area-v1 light-gray-bg pb-90 position-relative z-1">
      <div class="shape shape-one scene">
        <span>
          <img src={shape7} alt="" />
        </span>
      </div>
      <div class="shape shape-two scene">
        <span>
          <img src={shape8} alt="" />
        </span>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="img-holder position-relative z-1 mb-50">
              <div class="shape shape-one animate-float-y">
                <span>
                  <img src={shape5} alt="" />
                </span>
              </div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-wrapper mb-50">
              <div class="section-title mb-30">
                <span class="sub-title st-one">Best Skills</span>
                <h2>Experience Team to Provide Ideas</h2>
                <p class="blue-dark">
                  Professional Design Agency to provide solutions
                </p>
              </div>
              <div class="skill-list">
                <div class="single-skill">
                  <div class="progress-title">
                    <h5>
                      UX/UI Strategy <span>79%</span>
                    </h5>
                  </div>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "79%" }}
                  ></div>
                  <div class="progress"></div>
                </div>
                <div class="single-skill">
                  <div class="progress-title">
                    <h5>
                      Web Development <span>64%</span>
                    </h5>
                  </div>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "64%" }}
                  ></div>
                  <div class="progress"></div>
                </div>
                <div class="single-skill">
                  <div class="progress-title">
                    <h5>
                      Product Design <span>93%</span>
                    </h5>
                  </div>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "93%" }}
                  ></div>
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
