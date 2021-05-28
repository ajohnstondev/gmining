import React from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

const Documents = ({ data }) => {
  const DOCUMENTS = data.items;
  return (
    <div className={`${styles.documentsContainer} global-x-spacing`}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-secondary uppercase text-center pb-2 lg:pb-0">
          Refrence Documents
        </h3>
        <div>
          {DOCUMENTS.map(({ title, items }) => (
            <div className="py-2 lg:py-5">
              <h4 className="text-primary mb-3">{title}</h4>

              {items && items.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {items.map(({ title, type, download_link }) => (
                    <li className="bg-white rounded-lg py-4 px-6 grid grid-cols-6 justify-between lg:flex lg:items-start gap-6 lg:gap-0 ">
                      <span className="col-span-1 font-bold text-text">
                        {type}
                      </span>
                      <span className="col-span-5 gap-x-8 flex-1 flex flex-col lg:flex-row lg:pl-8">
                        <span className="text-text flex-1">{title}</span>
                        <span>
                          <Link
                            to={download_link}
                            className="text-secondary underline uppercase font-xs"
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
