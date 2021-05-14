import React from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";

const REPORTS = [
  {
    title: "2020 Management Information Circular",
    date: "DEC 15, 2020",
    link: "#",
  },
  {
    title: "2020 Management Information Circular",
    date: "DEC 15, 2020",
    link: "#",
  },
];

const AnnualReports = () => {
  return (
    <TitledContainer title="Annual Reports" bgColor="#F4F2F2">
      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        {REPORTS.map(({ title, date, link }) => (
          <div className="bg-white p-8 rounded-xl flex flex-col gap-3">
            <h3 className="text-xl lg:text-2xl text-primary">{title}</h3>
            <p className="text-text font-semibold">{date}</p>
            <Link to={link} className="underline uppercase text-secondary">
              See the Complete Document {">"}
            </Link>
          </div>
        ))}
      </div>
    </TitledContainer>
  );
};

export default AnnualReports;
