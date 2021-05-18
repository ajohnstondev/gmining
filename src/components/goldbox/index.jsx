import React from "react";
import RRenderer from "../richtextRenderer";
import "./index.scss";

const GoldBox = ({ title, main }) => {
  return (
    <div className={`our-mission-container py-6 lg:py-0 px-8 xl:px-0`}>
      <div className={`max-w-6xl mx-auto pt-12 pb-0 lg:px-24 flex flex-col items-center mission-wrapper`}>
        {title && (
          <h2 className={`text-2xl text-secondary uppercase mission-heading`}>
            {title}
          </h2>
        )}
        {main && (
          <p className={`text-left lg:text-center mb-4 lg:mb-8`}>
            <RRenderer
              data={main}
              config={{
                p: "mb-3",
              }}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default GoldBox;
