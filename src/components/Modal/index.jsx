import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import "./index.scss";

const Modal = ({ onClose }) => {
  const { allContentfulFormSubmitModal } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulFormSubmitModal {
        nodes {
          content {
            content
          }
        }
      }
    }
  `);
  const { content } = allContentfulFormSubmitModal.nodes[0].content;
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-modal rounded-xl">
        <div className="modal-content flex flex-col items-center border-2 border-primary">
          <h3 className="text-primary">Thank you</h3>
          <p className="text-text">{content}</p>
          <div className="button-container">
            <button
              className="see-button rounded px-12 py-2 "
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
