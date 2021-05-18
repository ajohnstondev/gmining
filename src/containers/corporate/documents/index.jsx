import React from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

const Documents = ({ data }) => {
  const DOCUMENTS = data.items;
  return (
    <div className={`${styles.documentsContainer} px-4 lg:px-8 xl:px-0`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-secondary uppercase text-center pb-2 lg:pb-0">
          Refrence Documents
        </h2>
        <div>
          {DOCUMENTS.map(({ title, items }) => (
            <div className="py-2 lg:py-5">
              <h3 className="text-primary text-lg font-semibold mb-3">
                {title}
              </h3>

              {items && items.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {items.map(({ title, type, download_link }) => (
                    <li className="bg-white rounded-lg py-4 px-6 flex items-start lg:items-center gap-3 lg:gap-8">
                      <span className="font-bold text-lg text-text">
                        {type}
                      </span>
                      <span className="gap-x-8 flex-1 flex flex-col lg:flex-row">
                        <span className="flex-1">{title}</span>
                        <span>
                          <Link
                            to={download_link}
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
