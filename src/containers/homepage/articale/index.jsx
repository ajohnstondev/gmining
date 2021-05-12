import React from "react";
import styles from "./index.scss";
import { Link } from "gatsby";
const MarketingPosition = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto">
        <div class="grid grid-cols-6 gap-24">
          <div className="lg:col-span-4 lg:px-2">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              New Releases
            </h2>
            <div class="grid grid-rows-2 grid-flow-col gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div class="col-span-8 bg-gray-200 rounded p-6">
                  <h2 className="text-primary  font-medium text-lg">
                    News Article Title Placeholder Lorem Ipsum Dolor Sit Amet
                  </h2>
                  <p className="uppercase text-sm py-4 text-gray-600">
                    MONTH, DAY, YEAR
                  </p>
                  <Link
                    className="text-secondary underline uppercase text-sm font-bold"
                    to="/"
                  >
                    Read the Article
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 lg:px-2">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              Quick Links
            </h2>
            <div className="border-secondary border-b border-solid mb-2"></div>
            <Link
              className="text-primary uppercase text-sm font-semibold	block my-4"
              to="/"
            >
              Press Releases
            </Link>

            <Link
              className="text-primary uppercase text-sm font-semibold	block my-4"
              to="/"
            >
              Blog
            </Link>

            <Link
              className="text-primary uppercase text-sm font-semibold	block my-4"
              to="/"
            >
              Financials
            </Link>

            <Link
              className="text-primary uppercase text-sm font-semibold	block my-4"
              to="/"
            >
              Presentations & fact sheetss
            </Link>

            <p className="py-4">
              For more information on disclosures, reports, and other
              publications, click below:
            </p>
            <button className="seeMoreBtn p-3 uppercase rounded">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPosition;
