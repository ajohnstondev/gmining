import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link, navigate } from "gatsby";
import "./index.scss";
import Logo from "../../images/logo.png";
import SearchIcon from "./../../images/search-icon.png";
import ArrowDownBlack from "../../images/down-arrow-black.png";
import ArrowDownWhite from "../../images/down-arrow-white.png";

const Header = ({ inverted }) => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isInverted, setInverted] = useState(inverted);
  const [langOpen, setLangOpen] = useState(false);

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
      items: [
        {
          title: "ABOUT US",
          path: "/about-us",
        },
        {
          title: "OUR TEAM",
          path: "/about-us/our-team",
        },
      ],
    },
    {
      title: "CORPORATE",
      path: "/corporate",
      items: [
        {
          title: "CORPORATE GOVERNENCE",
          path: "/corporate",
        },
        {
          title: "CORPORATE DIRECTORY",
          path: "/corporate/corporate-directory",
        },
      ],
    },
    {
      title: "NEWS",
      path: "/news",
    },
    {
      title: "INVESTORS",
      path: "/investors",
      items: [
        {
          title: "REPORTS AND DISCLOUSERS",
          path: "/investors",
        },
        {
          title: "EVENTS AND PRESENTATION",
          path: "/investors/events-and-presentations",
        },
      ],
    },
    {
      title: "PROJECTS",
      path: "/projects",
    },
  ];
  function scrollFunction() {
    if (typeof window != "undefined") {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  }
  useEffect(() => {
    if (typeof window != "undefined") {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);

  return (
    <header
      onMouseOver={() => setInverted(true)}
      onMouseOut={() => setInverted(false)}
      className={`${
        isInverted || inverted ? "bg-white" : "bg-transparent"
      }   left-0 right-0 top-0 z-10 header-main ${
        scroll ? "fixed bg-white" : "absolute"
      }`}
    >
      <div className="py-1 flex flex-wrap items-center justify-between  px-4 md:px-6">
        <Link
          className="flex items-center justify-content no-underline text-white"
          to="/"
        >
          <img src={Logo} alt="logo" />
        </Link>

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <span className="navbarToggleIcon" />
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {navigations.map((item) => (
            <NavListItem
              item={item}
              inverted={inverted}
              isInverted={isInverted}
              scroll={scroll}
            />
          ))}

          <div className="cursor-pointer flex items-center gap-x-8">
            <div
              className="px-3 link-item block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-primary"
              key="PROJECTS"
              to="/"
            >
              <div className="item" onClick={() => setLangOpen(!langOpen)}>
                EN
              </div>
              <div className={`${!langOpen && "hidden"} flex langDropDown`}>
                <Link className="lang">EN</Link>
                <Link className="lang">FR</Link>
              </div>
            </div>
            <Link
              className=" block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-black"
              key="PROJECTS"
              to="/"
            >
              <div className="">
                <img src={SearchIcon} />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavListItem = ({ item, inverted, isInverted, scroll }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleDropDown = (e) => {
    setSubMenuVisible(!subMenuVisible);
    !item.items && navigate(item.path);
  };

  return (
    <div
      className={`cursor-pointer block md:inline-block  mt-4 md:mt-0 md:ml-10 no-underline link-item relative ${
        inverted || isInverted ? "text-text" : "text-white"
      } ${scroll ? "text-text" : "text-white"} `}
      key={item.title}
      activeClassName="active"
      partiallyActive={true}
      onClick={toggleDropDown}
    >
      <div className="item flex items-center">
        <span>{item.title}</span>
        {item.items && (
          <span>
            {!scroll && !inverted && !isInverted ? (
              <img src={ArrowDownWhite} className="ml-4" />
            ) : (
              <img src={ArrowDownBlack} className="ml-4" />
            )}
          </span>
        )}
      </div>
      {item.items && (
        <div
          className={`${
            !subMenuVisible && "hidden"
          }  dropdown lg:absolute lg:-ml-4`}
        >
          {item.items?.map((item) => (
            <Link
              className="subitem block bg-white no-underline text-black py-4 pl-4 pr-8 text-text"
              key={item.title}
              to={item.path}
              activeClassName="dropdown-active"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
