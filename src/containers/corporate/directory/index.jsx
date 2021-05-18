import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import * as styles from "./index.module.scss";

const Directory = ({ data }) => (
  <div className="py-16">
    <div className="px-4 lg:px-8 xl:px-0 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
      {data &&
        data.map(
          ({
            node: {
              email,
              name,
              phone,
              phone2,
              address,
              subtitle,
              websiteUrl,
            },
          }) => (
            <div>
              <div className="mb-5">
                <h3 className="text-2xl text-secondary uppercase">{name}</h3>
                {subtitle && (
                  <h4 className="text-primary font-semibold text-xl">
                    {subtitle}
                  </h4>
                )}
              </div>
              {address && (
                <ul className="mb-3 lg:mb-8">
                  <RRenderer
                    data={address}
                    config={{
                      p: "text-text",
                    }}
                  />
                </ul>
              )}
              {(email || phone || phone2 || websiteUrl) && (
                <div
                  className={`lg:py-6 lg:px-8 py-2 px-6 rounded-xl ${styles.contactLocation}`}
                >
                  {email && (
                    <div className="flex gap-3">
                      <span className="text-text font-bold">e</span>
                      <span>{email}</span>
                    </div>
                  )}
                  {phone && (
                    <div className="flex gap-3">
                      <span className="text-text font-bold">t</span>
                      <span>{phone}</span>
                    </div>
                  )}
                  {phone2 && (
                    <div className="flex gap-3">
                      <span className="text-text font-bold">t</span>
                      <span>{phone2}</span>
                    </div>
                  )}
                  {websiteUrl && (
                    <div className="flex gap-3">
                      <Link
                        to={websiteUrl}
                        className="underline text-secondary"
                      >
                        {websiteUrl}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}
    </div>
  </div>
);

export default Directory;
