import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import "./index.scss";

const Directory = ({ data }) => {
  return (
    <div className="py-16">
      <div className="global-x-spacing max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-32 lg:gap-y-12">
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
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-secondary uppercase">{name}</h3>
                  {subtitle && <h4 className="text-primary">{subtitle}</h4>}
                </div>
                {address && (
                  <ul className="flex-1 mb-6">
                    <RRenderer
                      data={address}
                      config={{
                        p: "text-text",
                      }}
                    />
                  </ul>
                )}
                {(email || phone || phone2 || websiteUrl) && (
                  <div className="contact-location lg:py-6 lg:px-8 py-2 px-6 rounded-xl">
                    {email && (
                      <div className="flex">
                        <span className="text-text">e:</span>
                        <span className="text-text pl-2">{email}</span>
                      </div>
                    )}
                    {phone && (
                      <div className="flex">
                        <span className="text-text">t: </span>
                        <span className="text-text pl-2">{phone}</span>
                      </div>
                    )}
                    {phone2 && (
                      <div className="flex">
                        <span className="text-text">t: </span>
                        <span className="text-text pl-2">{phone2}</span>
                      </div>
                    )}
                    {websiteUrl && (
                      <div className="flex">
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
