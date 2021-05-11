import React from "react";
import styles from "./index.scss";
const MarketingPosition = () => {
  return (
    <section className="intro-section  bg-secondary py-12 text-center p-4">
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
        <div className="py-6 ">
          <div className="flex flex-wrap  justify-center gap-2 text-center">
            <div className="xs:w-1/2 md:w-1/4 lg:w-1/6">
              <h1 className="text-primary font-normal text-5xl mb-4">I</h1>
              <p className="text-base">
                Led by experienced mine builder Louis-Pierre Gignac (CEO) and
                Chairman: Louis Gignac Sr. (Chairman)
              </p>
            </div>
            <div className="xs:w-1/2 md:w-1/4 lg:w-1/6">
              <h1 className="text-primary font-normal text-5xl mb-4">II</h1>
              <p className="text-base">
                Board and management aligned with shareholders
              </p>
            </div>
            <div className="xs:w-1/2 md:w-1/4 lg:w-1/6">
              <h1 className="text-primary font-normal text-5xl mb-4">III</h1>
              <p className="text-base">
                Significant institutional support from specialized mining funds
                and high net worth groups
              </p>
            </div>
            <div className="xs:w-1/2 md:w-1/4 lg:w-1/6">
              <h1 className="text-primary font-normal text-5xl mb-4">IV</h1>
              <p className="text-base">
                Exclusively supported by G Mining Services through an arm’s
                length MSA
              </p>
            </div>
            <div className="xs:w-1/2 md:w-1/4 lg:w-1/6">
              <h1 className="text-primary font-normal text-5xl mb-4">V</h1>
              <p className="text-base">
                Plan to acquire at least one advanced‐stage mining asset in 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPosition;
