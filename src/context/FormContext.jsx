import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AppContext } from "./AppContext";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const [eventData, setEventData] = useState({});
  const { user } = useContext(AuthContext);

  const handleEventCreation = async () => {
    const dofRef = doc(db, "event", user.uid);
    try {
      await setDoc(dofRef, { eventData: eventData });
      setCurrentStep(stepData[3]);
      console.log("event data added");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormContext.Provider
      value={{ eventData, setEventData, handleEventCreation }}
    >
      {children}
    </FormContext.Provider>
  );
};
