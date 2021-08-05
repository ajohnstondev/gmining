import React from "react";
import { saveAs } from "file-saver";

import "./index.scss";

const Documents = ({ data, title }) => {
  const DOCUMENTS = data.items;
  function onDownload(link, title, type) {
    if (link != "" || link != "/") saveAs(link, title+'.'+type);
  }

  return (
    <div className="documents-container global-x-spacing">
      <div className="max-w-78 mx-auto">
        <h3 className="text-secondary uppercase text-center pb-2 lg:pb-0">
          {title}
        </h3>
        <div>
          {DOCUMENTS.map(({ title, items }) => (
            <div className="py-2 lg:py-5">
              <h4 className="text-primary mb-3">{title}</h4>

              {items && items.length > 0 && (
                <ul className="flex flex-col">
                  {items.map(({ title, type, download_link }) => (
                    <li className="bg-white rounded-lg py-4 px-6 grid grid-cols-6 justify-between lg:flex lg:items-start gap-6 lg:gap-0 mb-2">
                      <span className="col-span-1 font-bold text-text">
                        {type}
                      </span>
                      <span className="col-span-5 gap-x-8 flex-1 flex flex-col lg:flex-row lg:pl-8">
                        <span className="text-text flex-1">{title}</span>
                        <span>
                          <button
                            className="text-secondary underline uppercase font-xs"
                            onClick={()=>onDownload(download_link, title, type)}
                          >
                            Download Now
                          </button>
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
