import React from "react";
import styles from "./index.scss";
const Intro = () => {
  return (
    <section className="intro-section py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl text-secondary uppercase">
            A company with no ceiling
          </h2>
          <p className="mt-4 text-text">
            G Mining Ventures Corp. (GMIN) is a mineral exploration company
            focused on the acquisition and development of precious metal
            properties. GMIN was created to capitalize on the value that
            successful mine development offers. The corporation is founded by
            the principals of G Mining Services Inc., whose proven method of
            building new mines on time and under budget will be leveraged into
            creating the next mid-tier producer.
          </p>
        </div>
        <div className="border-secondary border border-l-0 border-solid"></div>
      </div>
    </section>
  );
};

export default Intro;
