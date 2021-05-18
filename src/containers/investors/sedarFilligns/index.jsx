import React, { useState } from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const numPerPage = 4;

const SedarFillings = ({ data }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / numPerPage);
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
    >
      <ul className="flex flex-col gap-2 mb-6 lg:mb-10">
        {data
          .filter(({ node: { tags } }) => {
            return !filter || tags === filter;
          })
          .slice((page - 1) * numPerPage, (page - 1) * numPerPage + numPerPage)
          .map(({ node: { date, link, title, type } }) => (
            <li className="reports-file-single rounded-lg py-4 px-6 flex items-start lg:items-center gap-3 lg:gap-10">
              <span className="font-bold text-lg text-text">{type}</span>
              <span className="gap-x-10 flex-1 flex flex-col lg:flex-row">
                <span className="order-1">{date}</span>
                <span className="lg:order-2">
                  <Link
                    to={link}
                    className="text-primary underline uppercase text-sm"
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