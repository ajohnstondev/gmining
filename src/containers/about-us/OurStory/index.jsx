import React from "react";

import * as styles from "./index.module.scss";
import RRenderer from "../../../components/richtextRenderer";

const OurStory = ({ data: { title, content, image } }) => {
  return (
    <div className={`${styles.storyContainer} py-24`}>
      <div className="max-w-6xl mx-auto flex gap-8 items-center">
        <div className="w-1/2">
          <h2 className="text-2xl text-secondary uppercase">{title}</h2>
          <RRenderer
            data={content}
            config={{
              p: "text-text text-lg",
            }}
          />
        </div>
        <div className="w-1/2">
          <img
            src={image.file.url}
            alt=""
            className="w-10/12 mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
