import React from "react";

import * as styles from "./index.module.scss";

const Bio = ({ node: { name, role, position, image, bio } }) => {
  return (
    <div className={`${styles.bioContainer}`}>
      <div className="global-x-spacing max-w-6xl mx-auto flex gap-12 items-center">
        <div className="w-full lg:w-8/12">
          {name && <h4 className="hidden lg:block text-primary">{name}</h4>}
          {position && (
            <p className="hidden lg:block text-secondary font-xs">{position}</p>
          )}
          {role && <p className="text-text font-bold lg:my-3">{role}</p>}
          {bio && <p className="text-text mt-3">{bio.bio}</p>}
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
