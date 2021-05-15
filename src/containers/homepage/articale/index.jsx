import React from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

const MarketingPosition = ({ quickLinks }) => {
  return (
    <section className="intro-section  bg-secondary py-12">
      <div className="max-w-6xl mx-auto">
        <div class="grid gap-24 grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 p-4">
          <div className="col-span-2">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              New Releases
            </h2>

            <div class="grid gap-4 grid-cols-1  sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div class="bg-gray-400 rounded p-6">
                    <h2 className="text-primary  font-medium text-lg">
                      News Article Title Placeholder Lorem Ipsum Dolor Sit Amet
                    </h2>
                    <p className="uppercase text-sm py-4 text-gray-600">
                      MONTH, DAY, YEAr
                    </p>
                    <Link
                      className="text-secondary underline uppercase text-sm font-bold"
                      to="/"
                    >
                      Read the Article
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              {quickLinks.title}
            </h2>
            <div className="border-secondary border-b border-solid mb-2"></div>

            {quickLinks.quickLinks.items.map((v, i) => {
              return (
                <Link
                  className="text-primary uppercase text-sm font-semibold	block my-4"
                  to={v.link}
                >
                  {v.title}
                </Link>
              );
            })}

            <p className="py-4">{quickLinks.content}</p>
            <button className={`${styles.seeMoreBtn} p-3 uppercase rounded`}>
              <Link href={quickLinks.ctaLink}>{quickLinks.ctaText}</Link>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap p-4"></div>
      </div>
    </section>
  );
};

export default MarketingPosition;
