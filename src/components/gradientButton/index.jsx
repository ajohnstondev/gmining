import React from "react";

import "./index.scss";

const GradientButton = ({ children, long, ...props }) => {
  return (
    <button
      {...props}
      className={`font-xs uppercase rounded-md main-button ${
        long && "main-button-long"
      }`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
