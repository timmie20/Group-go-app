import React from "react";
import Template from "./Template";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import Signin from "./modals/Signin";

const TemplateContainer = () => {
  const { templateData, handleRedirect } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      {!user && <Signin />}
      <div className="grid grid-cols-3 gap-9">
        {templateData.map((template) => (
          <Template
            key={template.id}
            template={template}
            handleRedirect={handleRedirect}
            user={user}
          />
        ))}
      </div>
    </>
  );
};

export default TemplateContainer;
