import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import * as styles from "./index.module.scss";

const CoperatePresentation = ({ data }) => {
  return (
    <section className="bg-primary py-12">
      <div className="flex flex-col items-center lg:border-2 border-primary max-w-6xl mx-auto text-center">
        <h3 className={`${styles.heading} bg-primary text-primary uppercase  tracking-wider`}>
          {data.title}
        </h3>

        <p className="lg:px-12 py-6 text-text">
          {documentToReactComponents(JSON.parse(data.content.raw))}
        </p>
        <div className={`${styles.buttonContainer} bg-primary`}>
          <button className={`rounded p-3 uppercase ${styles.button} font-xs`}>
            {data.ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoperatePresentation;
