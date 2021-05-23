import React, { useState } from "react";
import Slider from "react-slick";

import { ChevronRight, ChevronLeft } from "../../../components/icon";
import Bio from "../Bio";
import * as styles from "./index.module.scss";

const RightArrow = ({ onClick }) => {
  return (
    <div className={styles.rightArrow} onClick={onClick}>
      <button>
        <ChevronRight className={`${styles.icon}`} />
      </button>
    </div>
  );
};

const LeftArrow = ({ onClick }) => {
  return (
    <div className={styles.leftArrow} onClick={onClick}>
      <button>
        <ChevronLeft className={`${styles.icon}`} />
      </button>
    </div>
  );
};

const Team = ({ data: { heading, subheading }, members }) => {
  const [activeMember, setActiveMember] = useState(0);
  const [directors, setDirectors] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    afterChange: (num) => {
      setActiveMember(num);
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div className="pt-10 pb-10 lg:pb-20">
      <div className=" max-w-6xl mx-auto">
        <p className="text-center text-text uppercase mb-8 font-xs">
          <span
            className={`cursor-pointer ${
              !directors ? "text-secondary" : "opacity-50 text-text"
            }`}
            onClick={() => {
              setDirectors(false);
              setActiveMember(0);
            }}
          >
            {heading}
          </span>
          &nbsp;|
          <span
            className={`cursor-pointer ${
              directors ? "text-secondary" : "opacity-50 text-text"
            }`}
            onClick={() => {
              setDirectors(true);
              setActiveMember(0);
            }}
          >
            {" "}
            {subheading}
          </span>
        </p>

        <div>
          <Slider {...settings}>
            {members &&
              members.length > 0 &&
              members
                .filter(
                  ({ node: { isBoardOfDirectors } }) =>
                    isBoardOfDirectors === directors
                )
                .map(
                  (
                    { node: { image, name, position, isBoardOfDirectors } },
                    idx
                  ) => (
                    <div
                      className={`${styles.teamCardContainer} ${
                        activeMember === idx && styles.active
                      }`}
                      onClick={() => setActiveMember(idx)}
                    >
                      <div className={`flex flex-col items-center ${styles.card}`}>
                        <div className={`w-4/12 lg:w-7/12 flex justify-center ${styles.cardImage}`}>
                          <img
                            alt={name}
                            src={image?.file?.url}
                            className="rounded-xl"
                          />
                        </div>
                        <div className="pt-4">
                          <h4 className={`${styles.cardTitle} text-center text-primary`}>
                            {name}
                          </h4>
                          <p className={`${styles.cardPosition} text-center w-8/12 mx-auto text-text font-xs opacity-50`}>
                            {position}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
          </Slider>
        </div>
      </div>
      <div className={`${styles.coloredStripe}`} />
      <Bio
        {...members.filter(
          ({ node: { isBoardOfDirectors } }) => isBoardOfDirectors === directors
        )[activeMember]}
      />
    </div>
  );
};

export default Team;
