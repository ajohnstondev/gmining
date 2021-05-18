import React, { useState } from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";

const numPerPage = 4;

const AnnualReports = ({ data }) => {
  const [page, setPage] = useState(1);
  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / numPerPage);
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination;
  };
  return (
    <TitledContainer
      title="Annual Reports"
      bgColor="#F4F2F2"
      pagination={generatePagination()}
      page={page}
      setPage={setPage}
    >
      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        {data.map(({ node: { title, date, linkText, linkUrl } }) => (
          <div className="bg-white p-8 rounded-xl flex flex-col gap-3">
            <h3 className="text-xl lg:text-2xl text-primary">{title}</h3>
            <p className="text-text font-semibold">{date}</p>
            <Link to={linkUrl} className="underline uppercase text-secondary">
              {linkText}
            </Link>
          </div>
        ))}
      </div>
    </TitledContainer>
  );
};

export default AnnualReports;
