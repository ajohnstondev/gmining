import React from "react";
import RRenderer from "../../../components/richtextRenderer";

const OurOperationals = ({ data }) => {
  const { title, content } = data;
  return (
    <div className="bg-gray-200">
      <div className="max-w-78 mx-auto text-center px-8 lg:px-0 py-24 border-secondary border-b border-solid">
        <h2 className="text-2xl text-secondary uppercase">{title}</h2>
        <RRenderer
          data={content}
          config={{
            p: "mt-4 text-text",
          }}
        />
      </div>
    </div>
  );
};

export default OurOperationals;
