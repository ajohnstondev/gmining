import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import Modal from "../Modal";
import Logo from "../../images/white-log.png";
import "./index.scss";

function Footer() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [thankModal, setThankModal] = useState(false);

  const subscribeHandler = (e) => {
    e.preventDefault();
    setThankModal(true);
  };

  return (
    <div className="">
      {thankModal && <Modal onClose={() => setThankModal(false)} />}
      <div className="footer-section relative z-10 flex justify-center">
        <div className="footer-overly text-center max-w-6xl py-8 bg-gray-300 absolute z-20 rounded-xl px-4">
          <h2 className="text-2xl text-secondary uppercase pb-2">
            JOIN OUR MAILING LIST
          </h2>
          <form
            onSubmit={subscribeHandler}
            className="block md:flex  justify-center max-w-6xl mx-auto gap-2 items-center"
          >
            <div className="w-1/1 sm:w-1/1 md:w-1/1 xl:w-2/5 py-2">
              <input
                type="text"
                placeholder="NAME"
                className="bg-transparent border-b-2 border-gray-600 w-full outline-none"
              />
            </div>
            <div className="w-1/1 sm:w-1/1 md:w-1/1 xl:w-2/5 py-2">
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b-2 border-gray-600 w-full outline-none"
              />
            </div>
            <div className="w-1/1 sm:w-1/1 md:w-1/1 xl:w-1/5 py-2">
              <button className="see-button rounded p-2 w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bar">
        <div className="flex flex-wrap items-center justify-between px-6 pb-12 pt-48 md:pt-24">
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
        <div className="px-6 pb-6">
          <p className="text-white inline">
            2021 G Mining Ventures Corp. All rights Reserved.
          </p>
          <Link href="" className="text-white underline">
            Legal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
