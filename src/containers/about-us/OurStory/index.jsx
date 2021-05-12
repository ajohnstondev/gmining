import React from "react";

import * as styles from "./index.module.scss";

const OurStory = () => {
  return (
    <div className={`${styles.storyContainer} py-24`}>
      <div className="max-w-6xl mx-auto flex gap-8 items-center">
        <div className="w-1/2">
          <h2 className="text-2xl text-secondary uppercase">Our Story</h2>
          <p className="pt-4 text-text text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            tenetur ut pariatur voluptatibus commodi aperiam dolor quis, qui,
            alias soluta necessitatibus explicabo a natus cum? Ipsam similique
            dolorum alias corporis adipisci iste!
          </p>
          <p className="pt-4 text-text text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            tenetur ut pariatur voluptatibus commodi aperiam dolor quis, qui,
            alias soluta necessitatibus explicabo a natus cum? Ipsam similique
            dolorum alias corporis adipisci iste!
          </p>
          <p className="pt-4 text-text text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            tenetur ut pariatur voluptatibus commodi aperiam dolor quis, qui,
            alias soluta necessitatibus explicabo a natus cum? Ipsam similique
            dolorum alias corporis adipisci iste!
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/CamionFermont.png/1200px-CamionFermont.png"
            alt=""
            className="w-10/12 mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
