import React from "react";

import "./index.scss";

const LegacyTimeline = ({ data: { title, content, timeline, icons } }) => {
  const firstEvent = timeline.items.shift();
  const lastEvent = timeline.items.pop();

  return (
    <div className="py-8 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-secondary uppercase">{title}</h3>
        <p className="global-x-spacing lg:w-10/12 text-center text-text pt-6">
          {content.content}
        </p>
        <div className={`w-full mt-8 lg:mt-24 timeline-container`}>
          {/* FIRST START */}
          <div className={`flex first-event timeline-event`}>
            <div className={`event-container`}>
              <span className={`event-line`} />
              <img src={icons[0].file.url} alt="" className="event-icon" />
              <div className={`event-detail`}>
                <h4 className="text-primary">{firstEvent?.year}</h4>
                <p className="text-secondary font-xs uppercase">
                  {firstEvent?.title}
                </p>
                <p className="text-text font-xs">{firstEvent?.content}</p>
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
                      <h4 className="text-primary">{year}</h4>
                      <p className="text-secondary font-xs uppercase">
                        {title}
                      </p>
                      <p
                        className="text-text font-xs"
                        dangerouslySetInnerHTML={{ __html: details }}
                      />
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
                <h4 className="text-primary">{lastEvent?.year}</h4>
                <h4 className="text-secondary font-xs uppercase">
                  {lastEvent?.title}
                </h4>
                <p className="text-text font-xs">{lastEvent?.content}</p>
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
