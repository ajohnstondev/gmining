import React from "react";
import RRenderer from "../../../components/richtextRenderer";

const MarketingPosition = ({ data }) => {
  return (
    <section className="intro-section bg-secondary py-12 text-center global-x-spacing">
      <div className="max-w-78 mx-auto">
        <div className="text-center py-6 border-secondary border-b border-solid">
          <h3 className="text-secondary uppercase">{data.title}</h3>
          <h4 className="text-primary my-3">{data.subtitle}</h4>
          <RRenderer
            data={data.content}
            config={{
              p: "mb-4 text-text",
            }}
          />
        </div>
        <div className="py-6">
          <div
            class={`grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-${
              data.features.items.length
            } md:grid-cols-3 text-center`}
          >
            {data.features.items.map((v, i) => (
              <div key={i}>
                <h1 className="text-primary font-normal mb-4">{v.title}</h1>
                <p
                  className="font-xs text-text slim"
                  dangerouslySetInnerHTML={{ __html: v.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPosition;
