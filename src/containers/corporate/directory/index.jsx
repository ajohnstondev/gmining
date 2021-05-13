import React from "react";

import * as styles from "./index.module.scss";

const DIRECTORY_DATA = [
  {
    title: "Principle place of business",
    subTitle: "Lipsum is good",
    address: [
      "7900 W This that",
      "lorem ipsum dolor sit",
      "Karachi, Sind",
      "Pakistan",
    ],
    contact: {
      email: "this@that.com",
      telephone: "111 222 333",
      fax: "123 321 123",
      website: "www.goodstuff.com",
    },
  },
  {
    title: "Principle place of business",
    address: [
      "7900 W This that",
      "lorem ipsum dolor sit",
      "Karachi, Sind",
      "Pakistan",
    ],
    contact: {
      email: "this@that.com",
      telephone: "111 222 333",
      fax: "123 321 123",
      website: "www.goodstuff.com",
    },
  },
  {
    title: "Principle place of business",
    address: [
      "7900 W This that",
      "lorem ipsum dolor sit",
      "Karachi, Sind",
      "Pakistan",
    ],
    contact: {
      email: "this@that.com",
      telephone: "111 222 333",
      fax: "123 321 123",
      website: "www.goodstuff.com",
    },
  },
  {
    title: "Principle place of business",
    address: [
      "7900 W This that",
      "lorem ipsum dolor sit",
      "Karachi, Sind",
      "Pakistan",
    ],
    contact: {
      email: "this@that.com",
      telephone: "111 222 333",
      fax: "123 321 123",
      website: "www.goodstuff.com",
    },
  },
];

const Directory = () => {
  const CONTACT_TO_ICON_MAPPER = {
    email: "e",
    telephone: "t",
    fax: "f",
  };

  return (
    <div className="py-16">
      <div className="px-4 lg:px-8 xl:px-0 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
        {DIRECTORY_DATA &&
          DIRECTORY_DATA.map(({ title, subTitle, address, contact }) => (
            <div>
              <div className="mb-5">
                <h3 className="text-2xl text-secondary uppercase">{title}</h3>
                {subTitle && (
                  <h4 className="text-primary font-semibold text-xl">
                    {subTitle}
                  </h4>
                )}
              </div>

              <ul className="mb-3 lg:mb-8">
                {address &&
                  address.map((add) => <li className="text-text">{add}</li>)}
              </ul>
              <div
                className={`lg:py-6 lg:px-8 py-2 px-6 rounded-xl ${styles.contactLocation}`}
              >
                {Object.keys(contact).map((info) => {
                  const icon = CONTACT_TO_ICON_MAPPER[info];
                  return (
                    <div className="flex gap-3">
                      {icon && (
                        <span className="text-text font-bold">{icon}:</span>
                      )}
                      <span
                        className={`${
                          info === "website" && "underline text-secondary"
                        }`}
                      >
                        {contact[info]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Directory;
