import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../images/white-log.png";
import styles from "./index.scss";
function Footer() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="items-center max-w-7xl mx-auto ">
      <div className="footer-section"></div>
      <div className="footer-overly text-center">
        <h2 className="text-2xl text-secondary uppercase pb-2">
          JOIN OUR MAILING LIST
        </h2>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="NAME"
            className="bg-transparent border-b-2 border-gray-600 w-64 outline-none"
          />
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="bg-transparent border-b-2 border-gray-600 w-64 outline-none"
          />
          <button className="seeMoreBtn rounded p-2">Submit</button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between footer-bar p-6">
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
