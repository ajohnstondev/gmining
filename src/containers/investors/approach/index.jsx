import React from "react";
import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Approach = ({ data }) => {
  return (
    <div className="bg-secondary py-20 global-x-spacing">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-secondary text-center mb-3 uppercase">{data.title}</h3>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-8 text-text">
          <div>
            <RRenderer data={data.leftContent} />
          </div>
          <div className="list-wrapper">
            <RRenderer
              data={data.rightContent}
              config={{
                li: "normal mb-5",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
