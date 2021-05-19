import { Link } from "gatsby";
import React from "react";

import RRenderer from "../../../components/richtextRenderer";
import * as styles from "./index.module.scss";

const Directory = ({ data }) => {
  return (
    <div className="py-16">
      <div className="px-4 lg:px-8 xl:px-0 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-32 lg:gap-y-12">
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
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-secondary uppercase">{name}</h3>
                  {subtitle && <h4 className="text-primary">{subtitle}</h4>}
                </div>
                {address && (
                  <ul className="flex-1">
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
                      <div className="flex gap-2">
                        <span className="text-text">e:</span>
                        <span className="text-text">{email}</span>
                      </div>
                    )}
                    {phone && (
                      <div className="flex gap-2">
                        <span className="text-text">t: </span>
                        <span className="text-text">{phone}</span>
                      </div>
                    )}
                    {phone2 && (
                      <div className="flex gap-2">
                        <span className="text-text">t: </span>
                        <span className="text-text">{phone2}</span>
                      </div>
                    )}
                    {websiteUrl && (
                      <div className="flex gap-2">
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
};

export default Directory;
