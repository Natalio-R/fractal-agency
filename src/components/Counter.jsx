import React from "react";

const Counter = () => {
  return (
    <section class="counter-area counter-area-v2 pb-90">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-center mb-55">
              <h2>Why People’s Like Us</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="counter-item mb-40">
              <div class="icon">
                <i class="flaticon-start-up"></i>
              </div>
              <div class="text">
                <h2 class="number">
                  <span>256</span>+
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="counter-item mb-40">
              <div class="icon">
                <i class="flaticon-creativity"></i>
              </div>
              <div class="text">
                <h2 class="number">
                  <span>783</span>+
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="counter-item mb-40">
              <div class="icon">
                <i class="flaticon-medal"></i>
              </div>
              <div class="text">
                <h2 class="number">
                  <span>97</span>+
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="counter-item mb-40 item-active">
              <div class="icon">
                <i class="flaticon-technical-support"></i>
              </div>
              <div class="text">
                <h2 class="number">
                  <span>35</span>+
                </h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
