import React from "react";
import { Link } from "gatsby";

import { shortenText } from "../../../utils/functions";
import GradientButton from "../../../components/gradientButton";
import "./index.scss";

const MarketingPosition = ({ quickLinks, news }) => {
  return (
    <section className="intro-section py-4 lg:py-12">
      <div className="max-w-78 mx-auto">
        <div class="grid gap-x-24 gap-y-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 py-4 global-x-spacing">
          <div className="col-span-2">
            <h3 className="text-secondary uppercase pb-2 ml-5 lg:ml-0">
              News Releases
            </h3>

            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
              {news.edges.slice(0, 4)
                .map(({ node: { ctaLink, ctaText, title, date } }) => (
                  <div class="article-container rounded p-6">
                    <h4 className="h-20 text-primary">
                      <div className="md:hidden lg:block">
                        {shortenText(title, 50)}
                      </div>
                      <div className="hidden md:block lg:hidden">
                        {shortenText(title, 30)}
                      </div>
                    </h4>
                    <p className="uppercase font-xs my-3 lg:mb-3 text-text">
                      {date}
                    </p>
                    <Link
                      className="text-secondary underline uppercase font-xs"
                      to={ctaLink}
                    >
                      {ctaText}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex col-span-2 flex-wrap-reverse lg:flex-wrap lg:col-span-1 lg:p-0">
            <div className="w-full">
              <h3 className="text-secondary uppercase pb-2">
                {quickLinks.quickLinksTitle}
              </h3>
              <div className="border-secondary border-b border-solid mb-2" />
              {quickLinks.quickLinks.items.map((v, i) => (
                <Link
                  className="text-primary uppercase font-xs no-light block my-4"
                  to={v.link}
                >
                  {v.title}
                </Link>
              ))}
            </div>
            <div className="w-full mb-8 lg:mb-0">
              <p className="py-5 text-text">{quickLinks.content}</p>
              <GradientButton>
                <Link href={quickLinks.ctaLink}>{quickLinks.ctaText}</Link>
              </GradientButton>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap p-4"></div>
      </div>
    </section>
  );
};

export default MarketingPosition;
