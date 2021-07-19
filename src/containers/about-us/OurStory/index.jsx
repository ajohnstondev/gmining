import React from "react";
import "./index.scss";
import RRenderer from "../../../components/richtextRenderer";

const OurStory = ({ data: { title, content, image } }) => {
  return (
    <div className="story-container lg:py-24 pt-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="global-x-spacing lg:w-1/2">
          <h3 className="text-center lg:text-left mb-4 text-secondary uppercase">
            {title}
          </h3>
          <RRenderer
            data={content}
            config={{
              p: "text-text mb-4 whitespace-pre-wrap",
            }}
          />
        </div>
        <div className="lg:w-6/12">
          <div className="mx-auto flex items-center our-story-image-container">
            <img
              src={image.file.url}
              alt=""
              className="our-story-image lg:w-10/12 mx-auto lg:rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
