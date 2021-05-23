import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { submitForm } from "../../../utils/submitForm";
import Modal from "../../../components/Modal";
import GradientButton from "../../../components/gradientButton";
import * as styles from "./index.module.scss";

const GetInTouch = () => {
  const [thankModal, setThankModal] = useState(false);
  const [formState, setForm] = useState({});

  const { form } = useStaticQuery(graphql`
    query GetInTouch {
      form: hubspotForm(id: { eq: "5103da9b-da45-4cde-b993-db79dd971e87" }) {
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
    <div className={`px-4 xl:px-0 ${styles.getInTouchWrapper}`}>
      {thankModal && <Modal onClose={() => setThankModal(false)} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFormData();
        }}
        className={`${styles.footerOverly} px-5 text-center mx-auto max-w-6xl py-8 bg-gray-300 z-20 rounded-lg`}
      >
        <h3 className=" text-secondary uppercase mb-5">GET IN TOUCH</h3>
        <div className="grid lg:grid-cols-2 gap-8 py-4 font-xs">
          {fields.map(({ fields }, index) => {
            const {
              label,

              fieldType,
              required,
              name,
            } = fields[0];
            return (
              <div
                className={`mb-5 lg:mb-0 w-full input-wrapper ${
                  index === 2 ? "col-span-2" : "col-span-1"
                }`}
              >
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
        </div>
        {/* <div className="flex flex-col lg:flex-row gap-8 py-4 font-xs">
          <input
            type="text"
            placeholder="NAME"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 outline-none font-xs`}
          />
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 outline-none font-xs`}
          />
        </div>
        <div className="pt-4 mb-6 lg:mb-16">
          <input
            type="text"
            placeholder="MESSAGE"
            className={`bg-transparent ${styles.input} pb-1 pl-2 flex-1 w-full outline-none font-xs`}
          />
        </div> */}
        <div className="flex justify-center ">
          <GradientButton long type="submit">
            SUBMIT
          </GradientButton>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
