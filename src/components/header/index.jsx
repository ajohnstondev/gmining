import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Logo from "../../images/logo.png";
import SearchIcon from "./../../images/search-icon.png";
function Header({ inverted }) {
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
  const navigations = [
    {
      title: "ABOUT",
      path: "/about-us",
    },
    {
      title: "CORPORATE",
      path: "/corporate",
    },
    {
      title: "NEWS",
      path: "/news",
    },
    {
      title: "Investors",
      path: "/investors",
    },
    {
      title: "PROJECTS",
      path: "/projects",
    },
  ];
  return (
    <header
      className={`${
        inverted ? "bg-white" : "bg-transparent"
      }  absolute left-0 right-0 top-0 z-10`}
    >
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
          {navigations.map((item) => (
            <Link
              className={`block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline ${
                inverted ? "text-text" : "text-white"
              } `}
              key={item.title}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}

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
            <img src={SearchIcon} alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
