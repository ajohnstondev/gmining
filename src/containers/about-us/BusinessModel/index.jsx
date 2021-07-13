import React from "react";
import "./index.scss";
import RRenderer from "../../../components/richtextRenderer";

const BusinessModel = ({ data }) => {
  const {
    title,
    description,
    modelLogo,
    childrenContentfulBusinessModelModelDetailsJsonNode,
  } = data;
  const {
    list,
    cards,
    duration,
    footerText,
  } = childrenContentfulBusinessModelModelDetailsJsonNode[0];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center py-24">
        <h2 className="text-2xl text-secondary uppercase">{title}</h2>
        <p className="w-10/12 text-center text-text pt-6">
          <RRenderer data={description} />
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center p-4">
        <img src={modelLogo.file.url} alt="" />
        <div className=" main-container w-full">
          <div className="rounded-lg mt-12 max-w-3xl mx-auto list-container">
            <ul className="lists grid grid-cols-2 grid-rows-2">
              {list.map((v, i) => {
                return <li key={i}>{v}</li>;
              })}
            </ul>
          </div>
          <div className="rounded-lg mt-12 text-center w-full range-container ">
            <h1 className="text-center uppercase text-2xl">{duration}</h1>
          </div>
        </div>
        <span className="event-line mt-6" />
        <div className="rounded-lg text-center mt-4 w-full grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-1">
          {cards.map((v, i) => {
            return (
              <div className="bg-gray-200 m-2 p-8 rounded-lg flex flex-col justify-center item-center">
                <p>{v}</p>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg mt-12 px-24 py-4 text-center bg-gray-300">
          <h3 className="text-center text-md text-primary font-semibold">
            {footerText}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
