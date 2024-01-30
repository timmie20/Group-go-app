import { createContext, useState } from "react";
import { getData } from "../data";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const navigate = useNavigate();
  const { templateData } = getData();

  const handleRedirect = (id) => {
    const selectTemplate = templateData.find((template) => template.id === id);
    if (!selectTemplate) {
      return;
    } else {
      setSelectedTemplate(selectTemplate);
      navigate("/create/event");
    }
  };

  return (
    <AppContext.Provider
      value={{ templateData, handleRedirect, selectedTemplate }}
    >
      {children}
    </AppContext.Provider>
  );
};
