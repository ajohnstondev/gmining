import React from "react";
import "./index.scss";
import RRenderer from "../../../components/richtextRenderer";

const BusinessModel = ({ data }) => {
  const { title, description, modelImage } = data;

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center py-16">
        <h2 className="text-2xl text-secondary uppercase">{title}</h2>
        <p className="w-10/12 text-center text-text pt-6">
          <RRenderer data={description} />
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center p-4">
        <img src={modelImage.file.url} alt="" />
      </div>
    </div>
  );
};

export default BusinessModel;
