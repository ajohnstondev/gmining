import { Link } from "gatsby";
import React from "react";

import { ChevronRight } from "../../../components/icon";
import * as styles from "./index.module.scss";

const BLOG_DATA = {
  years: ["2001", "2002", "2003", "2004"],
  articles: [
    {
      title: "Why react Js is the best JS framework",
      date: "7th April, 1997",
      sourceName:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa, unde autem quisquam quas laborum voluptatibus hic maiores pariatur illo temporibus eius, nesciunt ea, provident ullam adipisci nisi nam facilis!",
      link: "/article",
    },
    {
      title: "Why react Js is the best JS framework",
      date: "7th April, 1997",
      sourceName:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa, unde autem quisquam quas laborum voluptatibus hic maiores pariatur illo temporibus eius, nesciunt ea, provident ullam adipisci nisi nam facilis!",
      link: "/article",
    },
    {
      title: "Why react Js is the best JS framework",
      date: "7th April, 1997",
      sourceName:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa, unde autem quisquam quas laborum voluptatibus hic maiores pariatur illo temporibus eius, nesciunt ea, provident ullam adipisci nisi nam facilis!",
      link: "/article",
    },
  ],
};

const Blog = () => {
  return (
    <div className="py-8 lg:py-24">
      <div className="px-6 lg:px-8 px-0 max-w-6xl mx-auto">
        <h2 className=" text-secondary text-xl lg:text-3xl border-b border-secondary pb-4 mb-4 lg:mb-8">
          SORT BY DATE
        </h2>
        <div className={`justify-between lg:flex`}>
          <div className=" mb-6 lg:mb-0">
            <ul className="flex lg:flex-col lg:gap-3 gap-x-12 gap-y-3 flex-wrap">
              {BLOG_DATA.years.map((year) => (
                <li className="text-primary">{year}</li>
              ))}
            </ul>
          </div>
          <div className={` ${styles.blogContainer}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              {BLOG_DATA.articles.map((article) => (
                <div
                  className={`${styles.article} flex flex-col gap-3 rounded-lg py-5 lg:py-10 px-6`}
                >
                  <h3 className="text-primary text-2xl capitalize">
                    {article.title}
                  </h3>
                  <h4 className="uppercase text-text">{article.date}</h4>
                  <p className="text-text text-lg">
                    <span className="font-semibold">Source Name</span> -{" "}
                    {article.sourceName}
                  </p>
                  <Link
                    to={article.link}
                    className="text-sm text-secondary underline"
                  >
                    READ THE ARTICLE {">"}
                  </Link>
                </div>
              ))}
            </div>
            <div className={`${styles.pagination}`}>
              <div className="flex items-center">
                <div className={`${styles.chevronLeft}`}>
                  <ChevronRight size={19} />
                </div>
                <ul className="flex flex-1 justify-center gap-10">
                  <li className="text-secondary">1</li>
                  <li className="text-secondary">2</li>
                  <li className="text-secondary">3</li>
                  <li className="text-secondary">4</li>
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
