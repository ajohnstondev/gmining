import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import * as styles from "./index.module.scss";

const CoperatePresentation = ({ data }) => {
  return (
    <section className="bg-primary py-12">
      <div className="flex flex-col items-center lg:border-2 border-primary max-w-6xl mx-auto text-center">
        <h2 className={`${styles.heading} bg-primary text-2xl text-primary uppercase font-normal tracking-wider`}>
          {data.title}
        </h2>

        <p className="py-4 pb-8">
          {documentToReactComponents(JSON.parse(data.content.raw))}
        </p>
        <div className={`${styles.buttonContainer} bg-primary`}>
          <button className={`rounded p-2 uppercase ${styles.button} `}>
            {data.ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoperatePresentation;
