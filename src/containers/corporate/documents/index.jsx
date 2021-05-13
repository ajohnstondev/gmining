import React from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

const DOCUMENTS = [
  {
    title: "Policies",
    files: [
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
    ],
  },
  {
    title: "Charters",
    files: [
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
      {
        title: "Some File Title",
        link: "#",
      },
    ],
  },
];

const Documents = () => {
  return (
    <div className={`${styles.documentsContainer} px-4 lg:px-8 xl:px-0`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-secondary uppercase text-center pb-2 lg:pb-0">
          Refrence Documents
        </h2>
        <div>
          {DOCUMENTS.map(({ title, files }) => (
            <div className="py-2 lg:py-5">
              <h3 className="text-primary text-lg font-semibold mb-3">
                {title}
              </h3>

              {files && files.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {files.map(({ title, link }) => (
                    <li className="bg-white rounded-lg py-4 px-6 flex items-start lg:items-center gap-3 lg:gap-8">
                      <span className="font-bold text-lg text-text">PDF</span>
                      <span className="gap-x-8 flex-1 flex flex-col lg:flex-row">
                        {title}
                        <span>
                          <Link
                            to="#"
                            className="text-secondary underline uppercase text-sm"
                          >
                            Download Now
                          </Link>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
