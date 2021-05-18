import React from "react";

import * as styles from "./index.module.scss";
import RRenderer from "../../../components/richtextRenderer";

const OurStory = ({ data: { title, content, image } }) => {
  return (
    <div className={`${styles.storyContainer} lg:py-24 pt-16`}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        <div className=" px-8 xl:px-0 lg:w-1/2">
          <h2 className="text-center lg:text-left mb-4 text-2xl text-secondary uppercase">
            {title}
          </h2>
          <RRenderer
            data={content}
            config={{
              p: "text-text text-lg",
            }}
          />
        </div>
        <div className="lg:w-1/2">
          <img
            src={image.file.url}
            alt=""
            className="lg:w-10/12 mx-auto lg:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
