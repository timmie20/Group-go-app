import React from "react";
import Template from "./Template";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TemplateContainer = () => {
  const { templateData, handleRedirect } = useContext(AppContext);
  return (
    <>
      <div className="grid grid-cols-3 gap-9">
        {templateData.map((template) => (
          <Template
            key={template.id}
            template={template}
            handleRedirect={handleRedirect}
          />
        ))}
      </div>
    </>
  );
};

export default TemplateContainer;
