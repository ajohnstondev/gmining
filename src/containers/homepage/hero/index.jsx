import React from "react";

import * as styles from "./index.module.scss";

const Hero = () => {
  return (
    <section className={` ${styles.heroSection} relative`}>
      <div
        className={`absolute top-0 right-0 left-0 bottom-0 ${styles.overlay}`}
      ></div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="absolute left-0">
          <h1 className="text-primary text-5xl ">G MINING VENTURES.</h1>
          <h1 className="text-white text-4xl font-thin">
            BUY. BUILD. OPERATE.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
