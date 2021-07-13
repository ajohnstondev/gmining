import React from "react";

const OurValues = () => {
  return (
    <div className="max-w-6xl mx-auto lg:py-16">
      <h1 className="text-3xl text-secondary font-light py-2">Our Value</h1>
      <div className="px-4 lg:px-0 xl:px-0 flex">
        <div className="w-full lg:w-6/12 p-4 lg:p-0 lg:pr-24">
          <p className="text-base lg:text-md leading-5">
            FocusIn order to prosper, it is important for us to work
            hand-in-hand with the community, returning value to society as well
            as to shareholders. This is the tenet by which Centamin has operated
            for the past 25 years, building a responsible culture that values
            and supports people by creating jobs, infrastructure and
            opportunity, as well as developing our assets and delivering strong
            returns. These attributes are some of the elements that help develop
            and uphold our core values and operating standards.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <p className="text-base lg:text-md leading-5 uppercase pb-4 text-primary">
            Our values guide our day-to-day workplace conduct and help us to
            effectively deliver on our strategy.
          </p>

          <div className="items-center grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-4">
            <div className="bg-gray-300 p-2 text-center rounded-lg"> <h2 className="text-2xl text-primary p-1">Protect</h2></div>
            <div className="bg-gray-300 p-2 text-center rounded-lg"> <h2 className="text-2xl text-primary p-1">Protect</h2></div>
            <div className="bg-gray-300 p-2 text-center rounded-lg"> <h2 className="text-2xl text-primary p-1">Protect</h2></div>
            <div className="bg-gray-300 p-2 text-center rounded-lg"> <h2 className="text-2xl text-primary p-1">Protect</h2></div>
            <div className="bg-gray-300 p-2 text-center rounded-lg"> <h2 className="text-2xl text-primary p-1">Protect</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
