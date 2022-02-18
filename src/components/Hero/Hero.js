import React from "react";
import About from "../About/About";
import "./Hero.scss";

const Hero = ({ reel, reel2 }) => {
  return (
    <>
      <div className="loader">
        <div className="load-text">
          <span>The</span>
          <span> surprise</span>
          <span> of</span>
          <span> what</span>
          <span> is</span>
          <span> possible</span>
          <br />
          <span> to</span>
          <span> create</span>
          <span> from</span>
          <span> a</span>
          <span> single,</span>
          <br />
          <span>thin</span>
          <span> thread.</span>
        </div>
      </div>

      {/* header */}
      <div className="header">
        <div className="logo">Floral</div>
        <div></div>
      </div>

      <div className="main-section">
        <div className="section">
          <div className="reel">
            {reel.map((img) => (
              <div key={img.id} className={`pic ${img.imgClass}`}></div>
            ))}
          </div>

          <div className="main-text">
            Creating new dialouges
            <br />
            between threads and metal.
          </div>
        </div>

        <About />

        <div className="section">
          <div className="reel2">
            {reel2.map((img2) => (
              <div key={img2.id} className={`pic ${img2.imgClass}`}></div>
            ))}
          </div>
        </div>

        <div className="main-text2">
          The surprise of what is possible
          <br />
          to create from a single,
          <br />
          thin thread.
        </div>
      </div>
    </>
  );
};

export default Hero;
