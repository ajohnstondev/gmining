import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../../images/logo.png";
import styles from "./index.scss";
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-transparent absolute left-0 right-0 top-0 z-10">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto p-4 md:p-6">
        <Link className="flex items-center no-underline text-white" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

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
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-black"
            key="PROJECTS"
            to="/"
          >
            FR
          </Link>
          <Link
            className="block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-black"
            key="PROJECTS"
            to="/"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
