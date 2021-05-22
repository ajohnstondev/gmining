import React from "react";

import * as styles from "./index.module.scss";

const Hero = ({ data }) => {
  return (
    <section className={`${styles.heroSection} relative`}>
      <video loop autoplay="autoplay" muted>
        <source
          src="https://traversymedia.com/downloads/video.mov"
          type="video/mp4"
        />
      </video>
      <div className={`absolute top-0 right-0 left-0 bottom-0 ${styles.overlay} `}/>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="absolute left-0 ml-10 lg:ml-24">
          <h1 className="text-primary ">{data.title}</h1>
          <h2 className="text-white">{data.subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
