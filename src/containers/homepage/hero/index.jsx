import React from "react";

import "./index.scss";

const Hero = ({ data }) => {
  return (
    <section className="hero-section relative">
      <video autoplay="autoplay" muted loop>
        <source src={data.backgroundImage?.file?.url} type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 left-0 bottom-0 overlay" />
      <div className="absolute left-0 hero-content min-w-3/5 flex  items-center justify-center">
        <div className="py-8 md:py-16 px-10 md:px-12">
          <h1 className="text-primary sub-heading">{data.title}</h1>
          <h2 className="text-secondary border-t border-secondary py-2">
            {data.subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
