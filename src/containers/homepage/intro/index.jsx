import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./index.module.scss";

import { DownAngle } from "../../../components/icon";

const Intro = ({ data, stockItem }) => {
  return (
    <section className="intro-section py-12 max-w-6xl mx-auto p-4">
      <div class=" grid gap-4 grid-cols-1  sm:grid-cols-1 xl:grid-cols-2 md:grid-cols-2 md:gap-8">
        <div className="">
          <h3 className="text-secondary uppercase text-center lg:text-left">
            {data.title}
          </h3>
          <p className="mt-4 text-text text-center lg:text-left">
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </p>
        </div>

        <div className="lg:border-secondary lg:border lg:border-l-0 lg:border-solid p-2 lg:p-6 lg:pl-0">
          <div className="bg-gray-200 rounded p-6">
            <h4 className=" text-primary uppercase mb-2">
              Tsx-v {stockItem.ticker}
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className=" w-40 text-primary">
                  {stockItem.stockPriceTitle}
                </p>
                <p className="text-text">
                  {stockItem.stockPrice} {stockItem.stockChangeInValue}(
                  {stockItem.stockChangeInPercent})
                </p>
              </div>

              <div className="flex">
                <p className=" w-40 text-primary">{stockItem.marketCapTitle}</p>
                <p className="text-text">{stockItem.marketCap}</p>
              </div>

              <div className="flex">
                <p className=" w-40 text-primary">S{stockItem.spotGoldTitle}</p>
                <p className="text-text flex items-center">
                  {stockItem.spotGold}
                  <span className="pl-3 text-red-600">
                    <DownAngle size={14} color="red" />
                  </span>
                  <span className="pl-2 text-red-600 truncate">
                    {stockItem.goldChangeInValue} (
                    {stockItem.GoldChangeInPercent})
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-none gap-12"></div>
    </section>
  );
};

export default Intro;
