import React from "react";
import { Link } from "gatsby";

import "./index.scss";
import { ChevronRight } from "../icon";

const TitledContainer = ({
  title,
  sideList,
  sideNoWrap,
  children,
  bgColor,
  pagination,
  page,
  setPage,
  setFilter,
  pagLen,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "#fff",
      }}
      className="py-8 lg:py-24"
    >
      <div className="global-x-spacing px-0 max-w-6xl mx-auto">
        <h3 className=" text-secondary border-b uppercase border-secondary pb-4 mb-4 lg:mb-8">
          {title}
        </h3>
        <div className="justify-between lg:flex gap-12">
          {sideList && (
            <div className="lg:w-3/12 mb-6 lg:mb-0">
              <ul className="flex lg:flex-col lg:gap-3 gap-x-12 gap-y-3 flex-wrap">
                {sideList.map((text) => (
                  <li
                    className={`${
                      sideNoWrap && "w-full"
                    } font-xs text-primary uppercase cursor-pointer tit-shortText`}
                    onClick={() => !text.ctaLink && setFilter(text)}
                  >
                    {text.title ? (
                      <Link to={`/${text.ctaLink}`}>{text.title}</Link>
                    ) : (
                      text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={sideList ? "flex-1" : "full-blogContainer"}>
            {children}
            {pagination && (
              <div className="tit-pagination">
                <div className="flex items-center">
                  <div
                    className="tit-chevronLeft cursor-pointer"
                    onClick={() => {
                      setPage((prev) => {
                        return prev - 1 < 1 ? 1 : prev - 1;
                      });
                    }}
                  >
                    <ChevronRight size={15} />
                  </div>
                  <ul className="flex flex-1 justify-center">
                    {pagination.map((num) => (
                      <li
                        className={`font-xs text-secondary cursor-pointer px-5 ${
                          num === page && "underline"
                        }`}
                        onClick={() => setPage(num)}
                      >
                        {num}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setPage((prev) => {
                        return prev + 1 > pagLen ? pagLen : prev + 1;
                      });
                    }}
                  >
                    <ChevronRight size={15} className="tit-chevronRight" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitledContainer;
