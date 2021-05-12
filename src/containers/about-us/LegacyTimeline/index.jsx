import React from "react";

import * as styles from "./index.module.scss";
import Icon from "../../../images/icon.png";

const TIMELINE_EVENTS = [
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
  {
    year: 2004,
    title: "lorem ipsum dolor sit",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore sapiente soluta in.",
    logo: Icon,
  },
];

const firstEvent = TIMELINE_EVENTS.shift();
const lastEvent = TIMELINE_EVENTS.pop();

const LegacyTimeline = () => {
  return (
    <div className=" py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl text-secondary uppercase">Our Legacy</h2>
        <p className="w-10/12 text-center text-text pt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          inventore sapiente soluta in, obcaecati repellendus ducimus quas
          impedit autem eum nesciunt sunt veritatis magnam eveniet! Blanditiis
          alias delectus autem ratione excepturi tempore?
        </p>
        <div className={`w-full mt-24 ${styles.timelineContainer}`}>
          {/* FIRST START */}
          <div className={`flex ${styles.firstEvent} ${styles.timelineEvent}`}>
            <div className={`${styles.eventContainer}`}>
              <span className={`${styles.eventLine}`} />
              <img src={firstEvent.logo} alt="" className={styles.eventIcon} />
              <div className={`${styles.eventDetail}`}>
                <h3 className="text-primary font-semibold text-xl">
                  {firstEvent.year}
                </h3>
                <h4 className="text-secondary">{firstEvent.title}</h4>
                <p>{firstEvent.details}</p>
              </div>
            </div>
          </div>
          {/* FIRST END */}
          {TIMELINE_EVENTS.map(({ year, title, details, logo }, idx) => {
            const direction = idx % 2 === 0 ? "eventRight" : "eventLeft";
            return (
              <div
                className={`flex ${styles.timelineEvent} ${styles[direction]}`}
              >
                <div className={`${styles.eventContainer}`}>
                  <span className={`${styles.eventLine}`} />
                  <img src={logo} alt="" className={styles.eventIcon} />
                  <div className={`${styles.eventDetail}`}>
                    <h3 className="text-primary font-semibold text-xl">
                      {year}
                    </h3>
                    <h4 className="text-secondary">{title}</h4>
                    <p>{details}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* LAST START */}
          <div className={`flex ${styles.lastEvent} ${styles.timelineEvent}`}>
            <div className={`${styles.eventContainer}`}>
              <span className={`${styles.eventLine}`} />
              <img src={lastEvent.logo} alt="" className={styles.eventIcon} />
              <div className={`${styles.eventDetail}`}>
                <h3 className="text-primary font-semibold text-xl">
                  {lastEvent.year}
                </h3>
                <h4 className="text-secondary">{lastEvent.title}</h4>
                <p>{lastEvent.details}</p>
              </div>
            </div>
          </div>
          {/* LAST END */}
        </div>
      </div>
    </div>
  );
};

export default LegacyTimeline;
