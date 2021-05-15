import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import * as styles from "./index.module.scss";

const CoperatePresentation = ({ data }) => {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-primary uppercase font-normal tracking-wider">
          {data.title}
        </h2>

        <p className="py-4 pb-8">
          {documentToReactComponents(JSON.parse(data.content.raw))}
        </p>

        <button className={`rounded p-2 uppercase ${styles.button} `}>
          {data.ctaButtonText}
        </button>
      </div>
    </section>
  );
};

export default CoperatePresentation;
