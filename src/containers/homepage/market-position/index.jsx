import React from "react";
import styles from "./index.scss";
const MarketingPosition = () => {
  return (
    <section className="intro-section  bg-secondary py-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-6 border-secondary border-b border-solid">
          <h2 className="text-2xl text-secondary uppercase">
            Differentiated market position
          </h2>
          <h3 className="text-xl text-primary">“Self Performing” Philosophy</h3>
          <p className="mt-4 text-text">
            While 80% of new major mining projects are delivered late or over
            budget, the “self-perform” approach used by G Mining Services has a
            perfect record delivering either on time, under budget, or both.
            This success has been a product of the belief that hiring trades as
            employees, rather than contractors, creates shared interests across
            the value chain. These experiences, relationships and philosophies
            have been brought forward to support the expansion of G Minings
            capabilities into full lifecycle mine development.
          </p>
        </div>
        <div className="py-6 "></div>
      </div>
    </section>
  );
};

export default MarketingPosition;
