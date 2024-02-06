import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../data";
import { AuthContext } from "./AuthContext";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [stepData, setStepData] = useState(getData()?.stepData);
  const [currentStep, setCurrentStep] = useState(stepData[0]);
  const [isModalMounted, setIsModalMounted] = useState(false);

  const { templateData } = getData();

  const handleRedirect = (id) => {
    const selectTemplate = templateData.find((template) => template.id === id);
    if (user === null) {
      setIsModalMounted(true);
    } else {
      setIsModalMounted(false);
      if (!selectTemplate) {
        return;
      } else {
        setSelectedTemplate(selectTemplate);
        setCurrentStep(stepData[1]);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        templateData,
        handleRedirect,
        selectedTemplate,
        stepData,
        setStepData,
        currentStep,
        setCurrentStep,
        isModalMounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
