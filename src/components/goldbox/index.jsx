import React from "react";
import RRenderer from "../richtextRenderer";
import "./index.scss";

const GoldBox = ({
  title,
  main,
  button,
  link,
  onDownloadClick,
  file,
  blue,
}) => {
  return (
    <div
      className={`${
        blue ? "bg-primary" : ""
      } our-mission-container py-2 lg:py-24 global-x-spacing`}
    >
      <div
        className={`max-w-78 mx-auto py-12 lg:px-24 flex flex-col items-center mission-wrapper ${
          blue ? "mission-wrapper-blue" : ""
        }`}
      >
        {title && (
          <h3
            className={`text-center uppercase mission-heading pb-8 lg:pb-0 ${
              blue ? "text-primary mission-heading-blue" : "text-secondary"
            }`}
          >
            {title}
          </h3>
        )}
        {main && (
          <p
            className={`${
              blue ? "text-center" : "text-left"
            } lg:text-center pb-8 lg:pb-0 text-text`}
          >
            <RRenderer
              data={main}
              config={{
                p: "py-1",
              }}
            />
          </p>
        )}
        {button && (
          <div className="goldbox-btn-container">
            <button
              onClick={() => {
                onDownloadClick(file || link || "/");
              }}
              className="font-xs uppercase goldbox-button"
            >
              {button}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoldBox;
