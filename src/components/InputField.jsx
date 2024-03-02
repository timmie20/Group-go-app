import React from "react";

const InputField = ({
  name,
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="field_set_div">
        {label && <label htmlFor={id}>{label}</label>}
        {type === "textarea" ? (
          <textarea
            cols="50"
            rows="4"
            className="event_description_textarea"
            name={name}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
          ></textarea>
        ) : (
          <input
            name={name}
            className="inputs"
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={type === "email"}
          />
        )}
      </div>
    </>
  );
};

export default InputField;
