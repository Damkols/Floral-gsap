import React, { useEffect, useRef } from "react";
import About from "../About/About";
import "./Hero.scss";

const Hero = ({ reel, reel2, timeline }) => {
  let loadText = useRef(null);
  let span = useRef(null);
  let loader = useRef(null);
  let logo = useRef(null);
  let reelImg = useRef(null);
  let mainText = useRef(null);

  useEffect(() => {
    timeline.to(
      loader,
      {
        delay: 0.5,
        duration: 1.5,
        opacity: 0,
      },
      "-=.3"
    );
    timeline.to(loader, {
      zIndex: -1,
      duration: 0.1,
    });
    timeline.from(
      logo,
      {
        duration: 1,
        opacity: 0,
        y: -100,
      },
      "-=.2"
    );

    timeline.from(loadText, {
      duration: 1.5,
      delay: 0.5,
      skewX: -10,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
      y: 50,
      x: -20,
      opacity: 0,
    });

    timeline.to(loadText, {
      duration: 1.5,
      delay: 2,
      skewX: 10,
      skewY: -10,
      stagger: {
        amount: 0.4,
      },
      y: -50,
      x: 20,
      opacity: 0,
    });

    timeline.from(mainText, {
      duration: 1.2,
      opacity: 0,
      skewY: 10,
      y: 100,
      stagger: {
        amount: 0.4,
      },
    });
    timeline.from(reelImg, {
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <>
      <div className="loader" ref={(el) => (loader = el)}>
        <div className="load-text" ref={(el) => (loadText = el)}>
          <span ref={(el) => (span = el)}>The</span>
          <span ref={(el) => (span = el)}> surprise</span>
          <span ref={(el) => (span = el)}> of</span>
          <span ref={(el) => (span = el)}> what</span>
          <span ref={(el) => (span = el)}> is</span>
          <span ref={(el) => (span = el)}> possible</span>
          <br />
          <span ref={(el) => (span = el)}> to</span>
          <span ref={(el) => (span = el)}> create</span>
          <span ref={(el) => (span = el)}> from</span>
          <span ref={(el) => (span = el)}> a</span>
          <span ref={(el) => (span = el)}> single,</span>
          <br />
          <span ref={(el) => (span = el)}>thin</span>
          <span ref={(el) => (span = el)}> thread.</span>
        </div>
      </div>

      {/* header */}
      <div className="header">
        <div className="logo" ref={(el) => (logo = el)}>
          Floral
        </div>
        <div></div>
      </div>

      <div className="main-section">
        <div className="section">
          <div className="reel" ref={(el) => (reelImg = el)}>
            {reel.map((img) => (
              <div key={img.id} className={`pic ${img.imgClass}`}></div>
            ))}
          </div>

          <div className="main-text" ref={(el) => (mainText = el)}>
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
