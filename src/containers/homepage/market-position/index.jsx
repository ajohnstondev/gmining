import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./index.module.scss";

const MarketingPosition = ({ data }) => {

  return (
    <section className="intro-section  bg-secondary py-12 text-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-6 border-secondary border-b border-solid">
          <h2 className="text-2xl text-secondary uppercase">{data.title}</h2>
          <h3 className="text-xl text-primary">{data.subtitle}</h3>
          <p className="mt-4 text-text">
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </p>
        </div>
        <div className="py-6 ">
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-4 text-center">
            {data.features.items.map((v, i) => {
              return (
                <div>
                  <h1 className="text-primary font-normal text-5xl mb-4">
                    {v.title}
                  </h1>
                  <p className="text-base">
                    {v.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPosition;
