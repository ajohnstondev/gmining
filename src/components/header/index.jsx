import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link, navigate } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { useLocation } from "@reach/router";

import "./index.scss";
import Logo from "../../images/logo.png";
import SearchIcon from "./../../images/search-icon.png";
import ArrowDownBlack from "../../images/down-arrow-black.png";
import ArrowDownWhite from "../../images/down-arrow-white.png";
import { Search } from "../icon";

const languageName = {
  "en-US": "English",
  fr: "Français",
};

const Header = ({ inverted }) => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isInverted, setInverted] = useState(inverted);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    projectsFr,
    contentFulNavigationsFr,
    projectsEn,
    contentFulNavigationsEn,
  } = useStaticQuery(graphql`
    query allProjectPagesQueryAndSiteTitleQueryFrench {
      site {
        siteMetadata {
          title
        }
      }

      projectsFr: allContentfulProject(filter: { node_locale: { eq: "fr" } }) {
        edges {
          node {
            heading
            slug
          }
        }
      }
      contentFulNavigationsFr: allContentfulNavigation(
        filter: { node_locale: { eq: "fr" } }
      ) {
        nodes {
          links {
            links {
              items {
                path
                title
                items {
                  path
                  title
                }
              }
            }
          }
        }
      }
      projectsEn: allContentfulProject(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            heading
            slug
          }
        }
      }
      contentFulNavigationsEn: allContentfulNavigation(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          links {
            links {
              items {
                path
                title
                items {
                  path
                  title
                }
              }
            }
          }
        }
      }
    }
  `);

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
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        let navigations;

        if (currentLocale === "fr") {
          let currentEdges = projectsFr.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heading,
              path: `/${node.slug}`,
            };
          });

          const projectsLinks = {
            title: "PROJECTS",
            path: currentEdges[0].path,
            items: currentEdges,
          };
          navigations = contentFulNavigationsFr.nodes[0].links.links.items;

          navigations[4] = projectsLinks;
        } else {
          let currentEdges = projectsEn.edges;
          currentEdges = currentEdges.map(({ node }) => {
            return {
              title: node.heading,
              path: `/${node.slug}`,
            };
          });

          const projectsLinks = {
            title: "PROJECTS",
            path: currentEdges[0].path,
            items: currentEdges,
          };
          navigations = contentFulNavigationsEn.nodes[0].links.links.items;

          navigations[4] = projectsLinks;
        }

        return (
          <header
            onMouseOver={() => setInverted(true)}
            onMouseOut={() => {
              setInverted(false);
            }}
            className={`
            ${isExpanded ? "active-nav relative" : ""}
            ${
              isInverted || inverted ? "bg-white" : "bg-transparent"
            } left-0 right-0 top-0 z-10 header-main ${
              scroll ? "fixed bg-white" : "absolute"
            }`}
          >
            <div className="py-1 flex flex-wrap items-center justify-between px-4 md:px-6">
              <Link
                className="flex items-center justify-content no-underline text-white"
                to={`/${currentLocale}/`}
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
                } md:block md:flex md:items-center w-full md:w-auto font-xs`}
              >
                {navigations.map((item) => (
                  <NavListItem
                    currentLocale={currentLocale}
                    item={item}
                    inverted={inverted}
                    isInverted={isInverted}
                    scroll={scroll}
                  />
                ))}

                <div className=" cursor-pointer flex items-center gap-x-8 absolute bottom-0 lg:relative pb-8 lg:pb-0">
                  <div
                    className="px-3 link-item block md:inline-block mt-4 font-xs md:mt-0 md:ml-10 no-underline text-primary"
                    key="LanguageToggle"
                    to="/"
                  >
                    <div>
                      <div className="item">{languageName[currentLocale]}</div>
                      <div
                        className={`${
                          !langOpen && "hidden"
                        } flex langDropDown font-xs`}
                      >
                        {languages.map((language) => (
                          <a
                            className="lang"
                            onClick={() => changeLocale(language)}
                          >
                            <span
                              className={`${
                                languageName[currentLocale] ===
                                languageName[language]
                                  ? "text-secondary"
                                  : ""
                              }`}
                            >
                              {languageName[language]}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className=" block md:inline-block mt-4 md:mt-0 md:ml-10 no-underline text-black font-xs"
                    key="PROJECTS"
                  >
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSearchOpen((prev) => !prev)}>
                        <Search
                          size={14}
                          className={`navbar-search-icon ${
                            !searchOpen ? "inactive" : ""
                          }`}
                        />
                      </button>

                      <input
                        placeholder="SEARCH"
                        className={`font-xs navbar-search-field ${
                          searchOpen ? "px-2" : "inactive"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        );
      }}
    </IntlContextConsumer>
  );
};

const NavListItem = ({ item, inverted, isInverted, scroll, currentLocale }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const location = useLocation();

  const toggleDropDown = (e) => {
    setSubMenuVisible(!subMenuVisible);
    !item.items && navigate(`/${currentLocale}${item.path}`);
  };

  let className = location.pathname.includes(item.path) ? "link" : "";
  return (
    <div>
      <div
        className={`cursor-pointer lg:hidden block uppercase  mt-4 md:mt-0 md:ml-10 no-underline link-item relative ${className} text-text `}
        key={item.title}
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
            <div className="dropdown-content">
              {item.items?.map((item) => (
                <Link
                  className="subitem block bg-white no-underline text-black py-4 pl-4 pr-8 text-text font-xs"
                  key={item.title}
                  to={`/${currentLocale}${item.path}`}
                  activeClassName="dropdown-active"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link
        className={`cursor-pointer uppercase  hidden lg:inline-block  mt-4 md:mt-0 md:ml-10 no-underline link-item relative ${
          inverted || isInverted ? "text-text" : "text-white"
        } ${scroll ? "text-text" : "text-white"} `}
        key={item.title}
        activeClassName="link"
        partiallyActive={true}
        onClick={toggleDropDown}
        to={`/${currentLocale}${item.path}`}
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
            <div className="dropdown-content">
              {item.items?.map((item) => (
                <Link
                  className="subitem block bg-white no-underline text-black py-4 pl-4 pr-8 text-text font-xs"
                  key={item.title}
                  to={`/${currentLocale}${item.path}`}
                  activeClassName="dropdown-active"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Header;
