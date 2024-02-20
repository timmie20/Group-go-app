import React, { useState } from "react";
import { Formik } from "formik";

const FormContext = ({ children }) => {
  const [eventData, setEventData] = useState({});

  const handleEventCreation = (values) => {
    setEventData(values);
    console.log(eventData);
  };
  return (
    <>
      <Formik
        initialValues={{
          uid: "",
          template: { templateType: "" },
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
            minNumOfParticipant: 0,
            typeOfParticipants: "",
            amountPerParticipant: "",
          },
          paymentInfo: {
            bankName: "",
            accountNum: "",
          },
        }}
        onSubmit={(values) => {
          handleEventCreation(values);
        }}
      >
        {children}
      </Formik>
    </>
  );
};

export default FormContext;
