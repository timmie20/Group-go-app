import React from "react";

const InputField = ({ label, field, id, type, placeholder, ...props }) => {
  return (
    <>
      <div className="field_set_div">
        {label && <label htmlFor={id}>{label}</label>}
        {type === "textarea" ? (
          <textarea
            {...field}
            cols="50"
            rows="4"
            placeholder={placeholder}
            {...props}
          ></textarea>
        ) : (
          <input
            className="inputs"
            {...field}
            type={type}
            id={id}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
};

export default InputField;
