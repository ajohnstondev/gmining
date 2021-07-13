import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const MarketingPosition = ({ data }) => {
  return (
    <section className="intro-section bg-secondary py-12 text-center global-x-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-6 border-secondary border-b border-solid">
          <h3 className="text-secondary uppercase">{data.title}</h3>
          <h4 className="text-primary my-3">{data.subtitle}</h4>
          <p className="text-text">
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </p>
        </div>
        <div className="py-6 ">
          <div
            class={`grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-${data.features.items.length} md:grid-cols-3 text-center`}
          >
            {data.features.items.map((v, i) => {
              return (
                <div>
                  <h1 className="text-primary mb-4">{v.title}</h1>
                  <p className="font-xs text-text slim">{v.content}</p>
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
