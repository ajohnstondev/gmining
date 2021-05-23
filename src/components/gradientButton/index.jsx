import React from "react";

import "./index.scss";

const GradientButton = ({ children, long, type, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={`font-xs uppercase rounded-md main-button ${
        long && "main-button-long"
      }`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
