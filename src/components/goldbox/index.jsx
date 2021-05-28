import React from "react";
import { Link } from "gatsby";
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
        blue && "bg-primary"
      } our-mission-container py-2 lg:py-6 lg:py-0 global-x-spacing`}
    >
      <div
        className={`max-w-6xl mx-auto py-12 lg:px-24 flex flex-col gap-y-8 lg:gap-y-0 items-center mission-wrapper ${
          blue && "mission-wrapper-blue"
        }`}
      >
        {title && (
          <h3
            className={`text-center uppercase mission-heading ${
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
            } lg:text-center text-text`}
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
          <div className={`goldbox-button-container ${blue && "goldbox-button-container-blue"}`}>
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
