import React from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const DOCS = [
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
  {
    date: "APR 5, 2021",
    link: "#",
    text: "NEWS RELEASE - ENGLISH",
  },
];

const SedarFillings = () => {
  return (
    <TitledContainer
      title="Sedar Filings"
      sideList={[
        "press release",
        "annual statement",
        "interim fillings",
        "letters",
      ]}
      sideNoWrap
    >
      <ul className="flex flex-col gap-2 mb-6 lg:mb-10">
        {DOCS.map(({ date, link, text }) => (
          <li className="reports-file-single rounded-lg py-4 px-6 flex items-start lg:items-center gap-3 lg:gap-10">
            <span className="font-bold text-lg text-text">PDF</span>
            <span className="gap-x-10 flex-1 flex flex-col lg:flex-row">
              <span className="order-1">{date}</span>
              <span className="lg:order-2">
                <Link
                  to={link}
                  className="text-primary underline uppercase text-sm"
                >
                  {text}
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
