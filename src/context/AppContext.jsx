import { createContext, useState } from "react";
import { getData } from "../data";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [stepData, setStepData] = useState(getData()?.stepData);
  const [currentStep, setCurrentStep] = useState(stepData[0]);

  const { templateData } = getData();

  const handleRedirect = async (id) => {
    const selectTemplate = templateData.find((template) => template.id === id);
    if (!selectTemplate) {
      return;
    } else {
      setSelectedTemplate(selectTemplate);
      setCurrentStep(stepData[1]);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
