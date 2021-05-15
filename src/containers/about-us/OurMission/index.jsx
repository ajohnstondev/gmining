import React from "react";

import RRenderer from "../../../components/richtextRenderer";
import * as styles from "./index.module.scss";

const OurMission = ({ data: { title, content } }) => {
  return (
    <div className={`${styles.ourMissionContainer}`}>
      <div
        className={`max-w-6xl mx-auto py-12 px-24 flex flex-col items-center ${styles.missionWrapper}`}
      >
        <h2
          className={`text-2xl text-secondary uppercase ${styles.missionHeading}`}
        >
          {title}
        </h2>
        <p className={`text-center mb-8`}>
          <RRenderer data={content} />
        </p>
      </div>
    </div>
  );
};

export default OurMission;
