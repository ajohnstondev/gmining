import React, { useState } from "react";
import { Link } from "gatsby";
import uniq from "lodash.uniq";

import RRenderer from "../../../components/richtextRenderer";
import { ChevronRight } from "../../../components/icon";
import * as styles from "./index.module.scss";

const Blog = ({ data }) => {
  const [page, setPage] = useState(1);
  const years = data.map(({ node: { date } }) => {
    let year = new Date(date).getFullYear();
    return year;
  });
  const renderPagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / 4);
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination.map((num) => (
      <li
        className={`text-secondary cursor-pointer font-semibold ${
          num === page && "underline"
        }`}
        onClick={() => setPage(num)}
      >
        {num}
      </li>
    ));
  };

  return (
    <div className="py-8 lg:py-24">
      <div className="px-6 lg:px-8 px-0 max-w-6xl mx-auto">
        <h2 className=" text-secondary text-xl lg:text-3xl border-b border-secondary pb-4 mb-4 lg:mb-8">
          SORT BY DATE
        </h2>
        <div className={`justify-between lg:flex`}>
          <div className=" mb-6 lg:mb-0">
            <ul className="flex lg:flex-col lg:gap-3 gap-x-12 gap-y-3 flex-wrap">
              {uniq(years).map((year) => {
                return <li className="text-primary">{year}</li>;
              })}
            </ul>
          </div>
          <div className={` ${styles.blogContainer}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              {data
                .slice((page - 1) * 4, (page - 1) * 4 + 4)
                .map(
                  ({
                    node: { content, ctaLink, ctaText, title, formattedDate },
                  }) => (
                    <div
                      className={`${styles.article} flex flex-col gap-3 rounded-lg py-5 lg:py-10 px-6`}
                    >
                      <h3 className="text-primary text-2xl capitalize font-semibold">
                        {title}
                      </h3>
                      <h4 className="uppercase text-text font-semibold">
                        {formattedDate}
                      </h4>
                      <p className="text-text text-lg">
                        <RRenderer data={content} />
                      </p>
                      <Link
                        to={ctaLink}
                        className="text-sm text-secondary underline uppercase font-semibold"
                      >
                        {ctaText}
                      </Link>
                    </div>
                  )
                )}
            </div>
            <div className={`${styles.pagination}`}>
              <div className="flex items-center">
                <div className={`${styles.chevronLeft}`}>
                  <ChevronRight size={19} />
                </div>
                <ul className="flex flex-1 justify-center gap-10">
                  {renderPagination()}
                </ul>
                <div>
                  <ChevronRight
                    size={19}
                    className={`${styles.chevronRight}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
