import React from "react";
import styles from "./index.scss";
const CoperatePresentation = () => {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-primary uppercase font-normal tracking-wider">
          Corporate Presentation
        </h2>

        <p className="py-4 pb-8">
          Along side its committed shareholders, G Mining Ventures Corp. will
          seek to leverage it’s strong track record of developing, building and
          optimizing mining projects to create the next mid-tier producer. For
          more details please click the button below:
        </p>

        <button className="rounded p-2 uppercase button ">Download</button>
      </div>
    </section>
  );
};

export default CoperatePresentation;
