import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AppContext } from "./AppContext";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const [eventData, setEventData] = useState({
    uid: "",
    eventType: "",
    eventInfo: {
      creatorName: "",
      creatorEmail: "",
      socialLink: "",
      eventDesc: "",
      eventLocation: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      maxNumOfParticipant: 0,
      minNumOfParticipant: 2,
      typeOfParticipants: "",
      amountPerParticipant: "",
    },
    paymentInfo: {
      bankName: "",
      accountNum: "",
    },
  });

  const handleChangeForEventInfo = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      eventInfo: { ...eventData.eventInfo, [name]: value },
    });
  };

  const handleChangeForPaymentInfo = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      paymentInfo: { ...eventData.paymentInfo, [name]: value },
    });
  };

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
      value={{
        eventData,
        setEventData,
        handleChangeForEventInfo,
        handleChangeForPaymentInfo,
        handleEventCreation,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
