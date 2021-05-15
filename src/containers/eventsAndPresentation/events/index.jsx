import React from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const EVENTS = [
  {
    image:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg",
    title: "Corporate Presentation April 2021",
    date: "APR 9, 2021",
    link: "#",
  },
];

const Events = () => {
  return (
    <TitledContainer title="SORT BY DATE" sideList={["2001"]}>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 lg:mb-10">
        {EVENTS.map(({ image, title, date, link }) => (
          <div className="event-card-container rounded-xl overflow-hidden">
            <div className="card-image">
              <img src={image} alt={title} className="w-full" />
            </div>
            <div className="card-detail flex flex-col gap-3 p-6">
              <h3 className="text-primary text-xl">{title}</h3>
              <p className="text-text font-semibold">{date}</p>
              <Link to={link} className="underline uppercase text-secondary">
                See the Complete Document {">"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </TitledContainer>
  );
};

export default Events;
