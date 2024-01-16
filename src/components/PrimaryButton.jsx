import React from "react";

const PrimaryButton = ({ children, ...otherProps }) => {
  return (
    <button className="primary_button" {...otherProps} type="button">
      {children}
    </button>
  );
};

export default PrimaryButton;
