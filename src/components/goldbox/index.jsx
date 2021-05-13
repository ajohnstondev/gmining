import React from "react";

import * as styles from "./index.module.scss";

const OurMission = ({ title, main, emp }) => {
  return (
    <div
      className={`${styles.ourMissionContainer} py-6 lg:py-0 px-4 lg:px-8 xl:px-0`}
    >
      <div
        className={`max-w-6xl mx-auto pt-12 pb-0 lg:py-12 lg:px-24 flex flex-col items-center ${styles.missionWrapper}`}
      >
        {title && (
          <h2
            className={`text-2xl text-secondary uppercase ${styles.missionHeading}`}
          >
            {title}
          </h2>
        )}
        {main && (
          <p className={`text-left lg:text-center mb-4 lg:mb-8`}>{main}</p>
        )}
        {emp && (
          <p className={`${styles.dark} text-left lg:text-center`}>{emp}</p>
        )}
      </div>
    </div>
  );
};

export default OurMission;
