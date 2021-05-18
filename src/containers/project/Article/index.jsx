import React from "react";

import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Article = ({ data: { heading, image, content, bottomText } }) => {
  return (
    <div className="py-8 lg:py-20 px-8 xl:px-0">
      <div className="max-w-4xl mx-auto text-text">
        <h2 className="uppercase text-2xl text-secondary font-semibold text-center mb-10">
          {heading}
        </h2>
        <div className="bg-red-700 mb-12">
          <img alt="" src={image?.file?.url} className="w-full mx-auto" />
        </div>
        {/* config object used to control classes on rich text dynamically */}
        <RRenderer
          data={content}
          config={{
            p: "mt-2 mb-3",
            span: "disc-bullet",
            h4: "text-primary text-xl mb-4",
          }}
        />
        <div className="border-t-2 border-secondary mt-6 pt-6">
          <RRenderer
            data={bottomText}
            config={{
              p: "text-sm",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
