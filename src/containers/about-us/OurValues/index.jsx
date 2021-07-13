import React from "react";
import RRenderer from "../../../components/richtextRenderer";

const OurValues = ({ data }) => {
  const { title, shortDescription, values, content } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
      <h1 className="text-3xl text-secondary font-light py-2">{title}</h1>
      <div className="block md:flex">
        <div className="w-full lg:w-6/12 pr-6 lg:pr-24">
          <RRenderer
            data={content}
            config={{
              p: "text-base lg:text-md leading-5",
            }}
          />
        </div>
        <div className="w-full lg:w-6/12">
          <p className="text-base lg:text-md leading-5 uppercase pb-4 text-primary">
            {shortDescription}
          </p>

          <div className="items-center grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
            {values.items.map((v, i) => {
              return (
                <div className="bg-gray-300 p-4 text-center rounded-lg" key={i}>
                  <h2 className="text-xl text-primary p-1 font-bold">
                    {v.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
