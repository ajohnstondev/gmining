import React, { useState } from "react";
import { navigate, graphql, useStaticQuery, Link } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import { submitForm } from "../../utils/submitForm";
import Modal from "../Modal";
import GradientButton from "../gradientButton";
import { Search, DownAngleLine } from "../icon";
import Logo from "../../images/white-log.png";
import GMS from "../../images/GMS-white.png";
import "./index.scss";

const languageName = {
  "en-US": "English",
  fr: "Français",
};

function Footer() {
  const [thankModal, setThankModal] = useState(false);
  const [formState, setForm] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const {
    projectsFr,
    contentFulNavigationsFr,
    projectsEn,
    contentFulNavigationsEn,
    form,
  } = useStaticQuery(graphql`
    query Footer {
      form: hubspotForm(id: { eq: "81aa7cc7-7a89-43b0-9280-24df8bb89f84" }) {
        guid
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
            placeholder
          }
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

  const { formFieldGroups: fields, guid: id } = form;
  const getFields = () => {
    return Object.keys(formState).map((key) => {
      return {
        name: key,
        value: formState[key],
      };
    });
  };
  const submitFormData = async () => {
    let data = await submitForm(id, getFields(), Date.now(), true);
    setThankModal(true);
  };

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
          <div>
            {thankModal && <Modal onClose={() => setThankModal(false)} />}
            <div className="global-x-spacing footer-section relative z-10 flex justify-center">
              <div className="footer-overly text-center max-w-78 py-8 z-20 rounded-xl px-4">
                <h3 className="text-primary uppercase mb-6 lg:mb-0">
                  JOIN OUR MAILING LIST
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitFormData();
                  }}
                  className="block lg:flex justify-center max-w-78 mx-auto items-end"
                >
                  {fields[0].fields.map((field, index) => {
                    const {
                      label,
                      fieldType,
                      required,
                      name,
                      placeholder,
                    } = field;
                    return (
                      <div className="mb-5 lg:mb-0 flex-1 pr-3" key={label}>
                        <input
                          name={name}
                          type={fieldType}
                          placeholder={placeholder}
                          required={required}
                          onChange={(e) =>
                            setForm({
                              ...formState,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="bg-transparent input pb-1 pl-2 outline-none w-full font-xs"
                        />
                      </div>
                    );
                  })}

                  <div className="mt-6 lg:mt-0">
                    <GradientButton type="submit">Submit</GradientButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bar pt-24 md:pt-24 pb-2 lg:pb-12 global-x-spacing">
              <div className="max-w-78 mx-auto flex flex-wrap flex-col lg:flex-row items-center lg:items-start">
                <div className="w-full flex justify-center lg:pb-12 pb-2">
                  <img src={Logo} alt="" />
                </div>
                <ul className="=w-full lg:w-9/12 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:pr-12 mt-4 lg:pb-12 pb-2">
                  {navigations.map((item) => {
                    return <MenuItem {...item} currentLocale={currentLocale} />;
                  })}
                </ul>
                <div className="lg:pl-4 w-9/12 lg:w-3/12 flex flex-col items-center lg:items-start lg:pb-12 pb-2">
                  <form
                    className="w-full flex items-center"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (searchQuery) {
                        navigate(
                          `/${currentLocale}/search/?query=${searchQuery}`
                        );
                      }
                    }}
                  >
                    <button>
                      <Search color="#fff" size={14} />
                    </button>
                    <input
                      type="text"
                      className="footer-search flex-1 ml-2 p-1 font-xs"
                      placeholder="SEARCH"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </form>
                  <div className="pt-4 lg:pt-2 lg:pl-6 text-white font-xs">
                    {/* English | French */}
                    {languages.map((lang, idx) => {
                      return (
                        <>
                          {idx !== 0 && " | "}
                          <span
                            className={`cursor-pointer ${
                              languageName[lang] ===
                                languageName[currentLocale] && "text-secondary"
                            }`}
                            onClick={() => changeLocale(lang)}
                          >
                            {languageName[lang]}
                          </span>
                        </>
                      );
                    })}
                  </div>
                  <Link
                    to="http://www.gminingservices.com/"
                    className="w-full flex items-center pt-8"
                  >
                    <span
                      className="uppercase font-xs text-white mr-2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Visit our friends at
                    </span>
                    <img src={GMS} className="w-24 md:w-32" alt="" />
                  </Link>
                </div>
                <div className="text-white font-xs w-full pt-4 mt-8 lg:mt-0 text-center footer-credits px-12">
                  2021 G Mining Ventures Corp. All rights Reserved.
                  <a
                    className="underline font-bold"
                    href={
                      currentLocale === "en-US"
                        ? "https://assets.ctfassets.net/jj9ent3ck4o2/GS2VIIOn6MlqVJv672kD9/cfe1bc089e979eda96bd199d99ae7a84/Website_Legal_Disclaimer_-_English.pdf"
                        : "https://assets.ctfassets.net/jj9ent3ck4o2/1Fak2QVv4RdpIQNUU3lQsd/a4a9db3b0c2048517e8b634b4fdd57f9/Website_Legal_Disclaimer_-_French.pdf"
                    }
                    target="_blank"
                  >
                    Legal
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </IntlContextConsumer>
  );
}

const MenuItem = ({ path, title, items, currentLocale }) => {
  const [subOpen, setSubOpen] = useState(false);

  const onItemClick = () => {
    if (items && items.length > 0) {
      setSubOpen(!subOpen);
    } else {
      navigate(`/${currentLocale}${path}`);
    }
  };

  return (
    <li className="text-center lg:text-left">
      <div
        onClick={onItemClick}
        className="cursor-pointer text-white font-xs pb-4"
      >
        <div className="flex items-center justify-center lg:justify-start">
          <span className="pr-2">{title}</span>
          {items && items.length > 0 && (
            <div className={`${!subOpen && "rotate"}  lg:hidden`}>
              <DownAngleLine size={10} color="#fff" />
            </div>
          )}
        </div>
      </div>
      {items && items.length > 0 && (
        <ul className={`${!subOpen && "hidden"} lg:flex flex-col pb-2`}>
          {items.map((subNav) => (
            <li className="text-gray-500 font-xs uppercase pb-1">
              <Link to={`/${currentLocale}${subNav.path}`}>{subNav.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Footer;
