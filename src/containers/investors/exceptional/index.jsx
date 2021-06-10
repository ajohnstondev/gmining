import React from "react";

import RRenderer from "../../../components/richtextRenderer";

const ExceptionalContent = ({ data: { title, content, image } }) => {
  return (
    <div className="py-8 lg:py-20 global-x-spacing">
      <div className="max-w-4xl mx-auto text-text">
        <h3 className="uppercase text-secondary text-center mb-10">{title}</h3>

        <RRenderer
          data={content}
          config={{
            p: "mt-1 mb-2 text-center",
            span: "disc-bullet",
            h4: "text-primary mb-4",
          }}
        />

        <img
          src={image.file.url}
          className="mt-12 w-full"
        />
      </div>
    </div>
  );
};

export default ExceptionalContent;
