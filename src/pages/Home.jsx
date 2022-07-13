import React, { useEffect } from "react";
import {
  Main,
  Service,
  About,
  Contact,
  Counter,
  Price,
  Cta,
} from "../components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Main />
      <Service />
      <About />
      <Contact />
      <Counter />
      <Price />
      <Cta />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="back-to-top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default Home;
