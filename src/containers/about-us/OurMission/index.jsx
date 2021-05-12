import React from "react";

import * as styles from "./index.module.scss";

const OurMission = () => {
  return (
    <div className={`${styles.ourMissionContainer}`}>
      <div
        className={`max-w-6xl mx-auto py-12 px-24 flex flex-col items-center ${styles.missionWrapper}`}
      >
        <h2
          className={`text-2xl text-secondary uppercase ${styles.missionHeading}`}
        >
          Our Mission
        </h2>
        <p className={`text-center mb-8`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          accusamus placeat nam adipisci cupiditate quas a repudiandae obcaecati
          id pariatur quam culpa, eos officia ipsum tempore laborum.
        </p>
        <p className={`${styles.dark} text-center`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
