import React from "react";

const OurValues = ({ data }) => {
  return (
    <div className="bg-primary">
      <div className="max-w-5xl mx-auto py-12 lg:py-24 px-4 lg:px-0 xl:px-0 text-center ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-primary font-light py-6 leading-8 uppercase border-b-2 border-t-2 border-primary">
          {data?.title}
        </h1>
      </div>
    </div>
  );
};

export default OurValues;
