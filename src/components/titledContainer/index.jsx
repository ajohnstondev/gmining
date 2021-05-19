import React from "react";

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
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "#fff",
      }}
      className="py-8 lg:py-24"
    >
      <div className="px-6 lg:px-8 px-0 max-w-6xl mx-auto">
        <h3 className=" text-secondary border-b uppercase border-secondary pb-4 mb-4 lg:mb-8">
          {title}
        </h3>
        <div className={`justify-between lg:flex`}>
          {sideList && (
            <div className=" mb-6 lg:mb-0">
              <ul className="flex lg:flex-col lg:gap-3 gap-x-12 gap-y-3 flex-wrap">
                {sideList.map((text) => (
                  <li
                    className={`${
                      sideNoWrap && "w-full"
                    } font-xs text-primary uppercase cursor-pointer`}
                    onClick={() => setFilter(text)}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`${sideList || "full-blogContainer"} blogContainer`}>
            {children}
            <div className={`tit-pagination`}>
              <div className="flex items-center">
                <div className={`tit-chevronLeft`}>
                  <ChevronRight size={15} />
                </div>
                <ul className="flex flex-1 justify-center gap-10">
                  {pagination &&
                    pagination.map((num) => (
                      <li
                        className={`font-xs text-secondary cursor-pointer ${
                          num === page && "underline"
                        }`}
                        onClick={() => setPage(num)}
                      >
                        {num}
                      </li>
                    ))}
                </ul>
                <div>
                  <ChevronRight size={15} className={`tit-chevronRight`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitledContainer;
