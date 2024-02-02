import { createContext, useState } from "react";
import { getData } from "../data";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [stepData, setStepData] = useState(getData().stepData)
  const navigate = useNavigate();
  const { templateData } = getData();

  const handleRedirect = (id) => {
    const selectTemplate = templateData.find((template) => template.id === id);
    if (!selectTemplate) {
      return;
    } else {
      setSelectedTemplate(selectTemplate);
      // const step = stepData.find((step) => step.id === 2)
      // setStepData([...stepData, { ...step, checked: true } ])
      // const newStep = stepData.map(step => {
      //   if (step.id === 2) {
      //     return { ...step, checked: true }
      //   }
      //   else {
      //     return step
      //   }
      // })
      // setStepData(newStep)
      // console.log(stepData)
      navigate("/create/event");
    }
  };

  return (
    <AppContext.Provider
      value={{ templateData, handleRedirect, selectedTemplate, stepData, setStepData }}
    >
      {children}
    </AppContext.Provider>
  );
};
