import React, { useState } from "react";
import { navigate, graphql, useStaticQuery, Link } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import { submitForm } from "../../utils/submitForm";
import Modal from "../Modal";
import GradientButton from "../gradientButton";
import Logo from "../../images/white-log.png";
import { Search, DownAngleLine } from "../icon";
import "./index.scss";

const languageName = {
  "en-US": "English",
  fr: "Français",
};

function Footer() {
  const [thankModal, setThankModal] = useState(false);
  const [formState, setForm] = useState({});

  const { projects, form } = useStaticQuery(graphql`
    query Footer {
      projects: allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            heading
            slug
          }
        }
      }
      form: hubspotForm(id: { eq: "34f08749-a173-484b-818f-369db0f8fd14" }) {
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
    }
  `);
  const { formFieldGroups: fields, guid: id } = form;
  let currentEdges = projects.edges;
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
      items: [
        {
          title: "NEWS",
          path: "/news",
        },
      ],
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
    projectsLinks,
  ];
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
      {({ languages, language: currentLocale }) => (
        <div className="">
          {thankModal && <Modal onClose={() => setThankModal(false)} />}
          <div className="footer-section relative z-10 flex justify-center">
            <div className="footer-overly text-center max-w-6xl py-8 z-20 rounded-xl px-4">
              <h3 className="text-secondary uppercase -pb-5">
                JOIN OUR MAILING LIST
              </h3>
              <form
                // onSubmit={subscribeHandler}
                onSubmit={(e) => {
                  e.preventDefault();
                  submitFormData();
                }}
                className="block lg:flex justify-center max-w-6xl mx-auto gap-3 items-end"
              >
                {fields.map(({ fields }) => {
                  const {
                    label,
                    fieldType,
                    required,
                    name,
                  } = fields[0];
                  return (
                    <div className="mb-5 lg:mb-0 flex-1">
                      <input
                        name={name}
                        type={fieldType}
                        placeholder={label}
                        required={required}
                        onChange={(e) =>
                          setForm({
                            ...formState,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className={`bg-transparent input pb-1 pl-2 outline-none w-full font-xs `}
                      />
                    </div>
                  );
                })}

                <div>
                  {/* Here */}
                  <GradientButton type="submit">Submit</GradientButton>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bar pt-48 md:pt-32 pb-2 lg:pb-12 px-8 lg:px-8 xl:px-0">
            <div className="max-w-6xl mx-auto flex flex-wrap flex-col lg:flex-row items-center lg:items-start lg:gap-y-12 gap-y-2">
              <div className="w-full flex justify-center">
                <img src={Logo} alt="" />
              </div>
              <ul className="=w-full lg:w-9/12 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:pr-12">
                {navigations.map((item) => {
                  return <MenuItem {...item} />;
                })}
              </ul>
              <div className="lg:pl-4 w-6/12 lg:w-3/12 flex flex-col items-center lg:items-start">
                <div className="w-full flex items-center">
                  <div>
                    <Search color="#fff" size={14} />
                  </div>
                  <input
                    type="text"
                    className="footer-search flex-1 ml-2 p-1 font-xs"
                    placeholder="SEARCH"
                  />
                </div>
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
              </div>
              <div className="text-white font-xs w-full pt-4 mt-8 lg:mt-0 text-center footer-credits">
                2021 G Mining Ventures Corp. All rights Reserved. Legal
              </div>
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
}

const MenuItem = ({ path, title, items }) => {
  const [subOpen, setSubOpen] = useState(false);

  const onItemClick = () => {
    if (items && items.length > 0) {
      setSubOpen(!subOpen);
    } else {
      navigate(path);
    }
  };

  return (
    <li className="text-center lg:text-left">
      <div
        onClick={onItemClick}
        className="cursor-pointer text-white font-xs pb-4"
      >
        <div className="flex items-center gap-x-2 justify-center lg:justify-start">
          {title}
          {items && items.length > 0 && (
            <div className={`${!subOpen && "rotate"} lg:hidden`}>
              <DownAngleLine size={10} color="#fff" />
            </div>
          )}
        </div>
      </div>
      {items && items.length > 0 && (
        <ul className={`${!subOpen && "hidden"} lg:flex flex-col gap-1 pb-2`}>
          {items.map((subNav) => (
            <li className="text-gray-500 font-xs uppercase">
              <Link to={subNav.path}>{subNav.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Footer;
