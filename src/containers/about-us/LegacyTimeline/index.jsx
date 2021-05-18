import React from "react";

import "./index.scss";

const LegacyTimeline = ({ data: { title, content, timeline, icons } }) => {
  const firstEvent = timeline.items.shift();
  const lastEvent = timeline.items.pop();

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl text-secondary uppercase">{title}</h2>
        <p className="w-10/12 text-center text-text pt-6">{content.content}</p>
        <div className={`w-full mt-24 timeline-container`}>
          {/* FIRST START */}
          <div className={`flex first-event timeline-event`}>
            <div className={`event-container`}>
              <span className={`event-line`} />
              <img src={icons[0].file.url} alt="" className="event-icon" />
              <div className={`event-detail`}>
                <h3 className="text-primary font-semibold text-xl">
                  {firstEvent.year}
                </h3>
                <h4 className="text-secondary">{firstEvent.title}</h4>
                <p>{firstEvent.content}</p>
              </div>
            </div>
          </div>
          {/* FIRST END */}
          {timeline.items.map(
            ({ year, title, content: details, logo }, idx) => {
              const direction = idx % 2 === 0 ? "event-right" : "event-left";
              return (
                <div className={`flex timeline-event ${direction}`}>
                  <div className={`event-container`}>
                    <span className={`event-line`} />
                    <img
                      src={icons[idx].file.url}
                      alt=""
                      className="event-icon"
                    />
                    <div className={`event-detail`}>
                      <h3 className="text-primary font-semibold text-xl">
                        {year}
                      </h3>
                      <h4 className="text-secondary">{title}</h4>
                      <p>{details}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          {/* LAST START */}
          <div className={`flex last-event timeline-event`}>
            <div className={`event-container`}>
              <span className={`event-line`} />
              <img
                src={icons[icons.length - 1].file.url}
                alt=""
                className="event-icon"
              />
              <div className={`event-detail`}>
                <h3 className="text-primary font-semibold text-xl">
                  {lastEvent.year}
                </h3>
                <h4 className="text-secondary">{lastEvent.title}</h4>
                <p>{lastEvent.content}</p>
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
