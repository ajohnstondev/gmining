import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { submitForm } from "../../../utils/submitForm";
import Modal from "../../../components/Modal";
import GradientButton from "../../../components/gradientButton";
import "./index.scss";

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
    await submitForm(id, getFields(), Date.now(), true);
    setThankModal(true);
  };

  return (
    <div className="global-x-spacing get-in-touch-wrapper">
      {thankModal && <Modal onClose={() => setThankModal(false)} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFormData();
        }}
        className="footer-overly px-5 text-center mx-auto max-w-78 py-8 bg-gray-300 z-20 rounded-lg"
      >
        <h3 className=" text-secondary uppercase mb-5">GET IN TOUCH</h3>
        <div className="lg:grid lg:grid-cols-2 gap-8 py-4 font-xs">
          {fields.map(({ fields }, index) => {
            const { label, fieldType, required, name } = fields[0];
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
                  className={`bg-transparent input pb-1 pl-2 outline-none w-full font-xs`}
                />
              </div>
            );
          })}
        </div>
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
