import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./index.module.scss";

const Intro = ({ data }) => {
  return (
    <section className="intro-section py-12 max-w-6xl mx-auto p-4">
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-1 xl:grid-cols-2 md:grid-cols-2 md:gap-8">
        <div className="">
          <h2 className="text-2xl text-secondary uppercase">{data.title}</h2>
          <p className="mt-4 text-text">
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </p>
        </div>

        <div className="border-secondary border border-l-0 border-solid p-6 pl-0">
          <div className="bg-gray-200 rounded p-6">
            <h2 className="text-xl text-primary uppercase mb-2 font-semibold">
              Tsx-v Gmin
            </h2>
            <div className="grid grid-cols-2 gap-12">
              <h4 className="text-primary font-medium">Stock Price (CAD):</h4>
              <h4 className="">1.10 0.00(0.0%)</h4>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <h4 className="text-primary font-medium">Market Cap (CAD):</h4>
              <h4 className="">117M</h4>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <h4 className="text-primary font-medium">Spot Gold (USD):</h4>
              <h4 className="">1,776.82</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-none gap-12"></div>
    </section>
  );
};

export default Intro;
