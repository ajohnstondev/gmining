import React, { useState } from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const numPerPage = 4;

const SedarFillings = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  let pagLen = 1;

  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / numPerPage);
    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination;
  };

  const generateTags = () => {
    const allTags = [];

    data.forEach(({ node: { tags } }) => {
      !allTags.includes(tags) && tags && allTags.push(tags);
    });

    return allTags;
  };

  return (
    <TitledContainer
      title="Sedar Filings"
      sideList={generateTags()}
      sideNoWrap
      pagination={generatePagination()}
      page={page}
      setPage={setPage}
      setFilter={setFilter}
      pagLen={pagLen}
    >
      <ul className="flex flex-col gap-2 mb-6 lg:mb-10">
        {data
          .filter(({ node: { tags } }) => {
            return !filter || tags === filter;
          })
          .slice((page - 1) * numPerPage, (page - 1) * numPerPage + numPerPage)
          .map(({ node: { date, link, title, type } }) => (
            <li className="reports-file-single rounded-lg py-4 px-6 flex items-start lg:items-center lg:gap-10">
              <span className="pr-3 font-bold text-text">{type}</span>
              <span className="lg:items-center gap-x-10 flex-1 flex flex-col lg:flex-row">
                <span className="font-xs order-1 uppercase">{date}</span>
                <span className="flex items-center lg:order-2">
                  <Link
                    to={link}
                    className="text-primary underline uppercase font-xs"
                  >
                    {title}
                  </Link>
                </span>
              </span>
            </li>
          ))}
      </ul>
    </TitledContainer>
  );
};

export default SedarFillings;
