import React from "react";

import * as styles from "./index.module.scss";

const Bio = ({ name, role, position, image, bio }) => {
  return (
    <div className={`${styles.bioContainer}`}>
      <div className="px-4 lg:px-8 xl:px-0 max-w-6xl mx-auto flex gap-12 items-center">
        <div className="w-full lg:w-8/12">
          {name && (
            <h2 className="hidden lg:block text-primary text-2xl font-semibold">
              {name}
            </h2>
          )}
          {position && (
            <h4 className="hidden lg:block text-secondary text-lg font-semibold">
              {position}
            </h4>
          )}
          {role && <h3 className="text-xl font-semibold lg:my-3">{role}</h3>}
          {bio && <p className="text-text text-lg mt-3">{bio.bio}</p>}
        </div>
        <div className="hidden lg:block w-4/12">
          {image && (
            <img alt={name} src={image?.file?.url} className="w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bio;
