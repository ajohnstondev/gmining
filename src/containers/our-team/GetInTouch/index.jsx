import React from "react";

import * as styles from "./index.module.scss";

const GetInTouch = () => {
  return (
    <div>
      <div
        className={`${styles.footerOverly} text-center mx-auto max-w-6xl py-8 bg-gray-300 z-20 rounded-lg`}
      >
        <h2 className="text-2xl text-secondary uppercase pb-2">GET IN TOUCH</h2>
        <div className="flex flex-col lg:flex-row gap-8 px-8 py-4">
          <input
            type="text"
            placeholder="NAME"
            className="bg-transparent border-b-2 pb-2 pl-2 border-gray-600 flex-1 outline-none"
          />
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="bg-transparent border-b-2 pb-2 pl-2 border-gray-600 flex-1 outline-none"
          />
        </div>
        <div className="px-8 pt-4 mb-12 lg:mb-4">
          <input
            type="text"
            placeholder="MESSAGE"
            className="bg-transparent border-b-2 pb-2 pl-2 border-gray-600 w-full outline-none"
          />
        </div>
        <button className={`${styles.seeButton} rounded py-3 px-16`}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
