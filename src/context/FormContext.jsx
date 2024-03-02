import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AppContext } from "./AppContext";
import { nanoid } from "nanoid";
import cover from "../assets/images/resturant image.jpeg";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState();
  const { user } = useContext(AuthContext);

  // console.log(user);

  const [eventData, setEventData] = useState({
    uid: "",
    eventImg: "",
    totalAmount: 0,
    eventId: nanoid(),
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

  const uploadCoverImage = () => {
    setLoading(true);
    const storageRef = ref(storage, `images/${imgUrl.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgUrl);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgresspercent(progress);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          // setEventData({...eventData, eventImg: downloadURL})
          handleEventCreation(downloadURL);
        });
      },
    );
  };

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

  const handleEventCreation = async (fileUrl) => {
    const newEventData = { ...eventData, eventImg: fileUrl };
    const dofRef = doc(db, "event", newEventData.eventId);
    try {
      await setDoc(dofRef, { eventData: newEventData });
      // console.log(newEventData)
      setCurrentStep(stepData[3]);
      console.log("event data added");
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
        uploadCoverImage,
        setImgUrl,
        imgUrl,
        loading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
