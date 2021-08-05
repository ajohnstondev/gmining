import React, { useState } from 'react';
import { Link } from 'gatsby';
import { IntlContextConsumer } from 'gatsby-plugin-intl';
import uniq from 'lodash.uniq';

import { shortenText } from '../../../utils/functions';
import RRenderer from '../../../components/richtextRenderer';
import { ChevronRight } from '../../../components/icon';
import './index.scss';

const Blog = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filteredYear, setFilteredYear] = useState('');
  let pagLen = 1;

  const years = data.map(({ node: { date } }) => {
    let year = new Date(date.replace(/-/g, '/')).getFullYear().toString();
    return year;
  });

  const filteredData = data.filter((item) => {
    let year = new Date(item.node.date.replace(/-/g, '/'))
      .getFullYear()
      .toString();
    return year.includes(filteredYear);
  });

  const renderPagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(filteredData.length / 4);

    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination.map((num) => (
      <li
        className={`text-secondary cursor-pointer font-xs ${
          num === page && 'underline'
        }`}
        onClick={() => setPage(num)}
      >
        {num}
      </li>
    ));
  };

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <div className="py-8 lg:py-24">
            <div className="global-x-spacing px-0 max-w-78 mx-auto">
              <h3 className="text-secondary uppercase border-b border-secondary pb-4 mb-4 lg:mb-8">
                { currentLocale === "fr" ? "Filtrer par date" : "Filter by date" }
              </h3>
              <div className="justify-between lg:flex">
                <div className="mb-6 lg:mb-0">
                  <ul className="flex lg:flex-col lg:gap-3 gap-x-12 gap-y-3 flex-wrap">
                    {uniq(years).map((year) => (
                      <li
                        className="text-primary font-xs cursor-pointer"
                        onClick={() => setFilteredYear(year)}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-container">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                    {filteredData
                      .slice((page - 1) * 4, page * 4)
                      .map(
                        ({
                          node: {
                            content,
                            ctaLink,
                            ctaText,
                            title,
                            formattedDate,
                          },
                        }) => (
                          <div className="article flex flex-col rounded-lg py-5 lg:py-10 px-6">
                            <h4 className="text-primary capitalize h-18">
                              <div className="md:hidden lg:block">
                                {shortenText(title, 40)}
                              </div>
                              <div className="hidden md:block lg:hidden">
                                {shortenText(title, 80)}
                              </div>
                            </h4>
                            <h4 className="uppercase text-text font-xs mt-3">
                              {formattedDate}
                            </h4>
                            <p className="flex-1 text-text read-more-content mt-3">
                              <RRenderer data={content} />
                            </p>
                            <Link
                              to={`/${currentLocale}/${ctaLink}`}
                              className="font-xs text-secondary underline uppercase mt-3"
                            >
                              {ctaText || "Read the Article"}
                            </Link>
                          </div>
                        )
                      )}
                  </div>
                  <div className="pagination">
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setPage((prev) => (prev - 1 < 1 ? 1 : prev - 1));
                        }}
                        className="chevron-left cursor-pointer"
                      >
                        <ChevronRight size={18} />
                      </div>
                      <ul className="flex flex-1 justify-center gap-10">
                        {renderPagination()}
                      </ul>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setPage((prev) =>
                            prev + 1 > pagLen ? pagLen : prev + 1
                          );
                        }}
                      >
                        <ChevronRight size={18} className="chevron-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </IntlContextConsumer>
  );
};

export default Blog;
