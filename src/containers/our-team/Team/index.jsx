import React, { useState } from "react";
import Slider from "react-slick";

import { ChevronRight } from "../../../components/icon";
import Bio from "../Bio";
import * as styles from "./index.module.scss";

const TEAM_DATA = [
  {
    image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    title: "Big Title",
    detail:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis corrupti quis eaque recusandae culpa, nostrum doloribus iste deleniti fugiat cupiditate blanditiis, impedit ipsum molestiae repellendus dignissimos eveniet quae excepturi quos sapiente voluptatem accusantium minima nihil! Tempore quidem adipisci optio cupiditate doloremque ratione obcaecati suscipit culpa officia soluta, laudantium ullam facilis, neque natus. Qui quod aliquid quibusdam voluptates, enim ipsa hic reiciendis nesciunt natus labore eaque quo voluptatem possimus! Nesciunt, minima beatae dignissimos error blanditiis, qui minus ut atque ab soluta tenetur accusamus. Magnam quam iure quaerat placeat. Hic excepturi, similique inventore debitis modi necessitatibus, esse eius, praesentium illum iusto delectus!",
    name: "John Doe",
    designation: "Founder and CEO",
  },
  {
    image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    name: "John Doe",
    designation: "Founder and CEO",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    name: "John Doe",
    designation: "Founder and CEO",
  },
  {
    image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    name: "John Doe",
    designation: "Founder and CEO",
  },
  {
    image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    name: "John Doe",
    designation: "Founder and CEO",
  },
  {
    image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    name: "John Doe",
    designation: "Founder and CEO and everything else",
  },
];

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
    <div className={` ${styles.leftArrow}`} onClick={onClick}>
      <button>
        <ChevronRight className={`${styles.icon}`} />
      </button>
    </div>
  );
};

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
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
    <div className="pt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-text uppercase mb-8">
          <span className="text-secondary"> Management Team</span> | Board Of
          Directors
        </h3>
        <div>
          <Slider {...settings}>
            {TEAM_DATA &&
              TEAM_DATA.length > 0 &&
              TEAM_DATA.map(({ image, name, designation }, idx) => (
                <div
                  className={`${styles.teamCardContainer} ${
                    activeMember === idx && styles.active
                  }`}
                  onClick={() => setActiveMember(idx)}
                >
                  <div className={`flex flex-col items-center ${styles.card}`}>
                    <div className="w-4/12 lg:w-7/12">
                      <img
                        alt={name}
                        src={image}
                        className="rounded-xl w-full"
                      />
                    </div>
                    <div className="pt-4">
                      <h4 className="text-center text-primary text-xl font-semibold">
                        {name}
                      </h4>
                      <p className="text-center w-8/12 mx-auto text-text text-sm">
                        {designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className={`${styles.coloredStripe}`} />
      <Bio {...TEAM_DATA[activeMember]} />
    </div>
  );
};

export default Team;
