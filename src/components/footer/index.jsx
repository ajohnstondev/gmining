import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../images/white-log.png";
import styles from "./index.scss";
function Footer() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="">
      <div className="footer-section relative z-10 flex justify-center">
        <div className="footer-overly text-center max-w-6xl py-8 bg-gray-300 absolute z-20 rounded-xl">
          <h2 className="text-2xl text-secondary uppercase pb-2">
            JOIN OUR MAILING LIST
          </h2>
          <div className="grid grid-cols-10 gap-8 px-8 py-4">
            <input
              type="text"
              placeholder="NAME"
              className="bg-transparent border-b-2 border-gray-600 col-span-4 outline-none"
            />
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-b-2 border-gray-600 col-span-4 outline-none"
            />
            <button className="see-button rounded p-2 col-span-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between footer-bar px-6 pt-48 pb-24">
        <Link className="flex items-center no-underline text-white" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="ABOUT"
            to="/about"
          >
            ABOUT
          </Link>

          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="CORPORATE"
            to="/conprate"
          >
            CORPORATE
          </Link>

          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="NEWS"
            to="/new"
          >
            NEWS
          </Link>

          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="INVESTORS"
            to="/INVESTORS"
          >
            INVESTORS
          </Link>

          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="PROJECTS"
            to="/"
          >
            PROJECTS
          </Link>

          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-white"
            key="PROJECTS"
            to="/"
          >
            FR
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
