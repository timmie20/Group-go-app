import React, { useContext, useEffect } from "react";
import AvailableEvents from "../components/AvailableEvents";
import PreviewAvailableEvents from "../components/PreviewAvailableEvents";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import loader from "../assets/images/orange-loader.svg";
import addIcon from "../assets/images/addIcon.svg";
import Signin from "../components/modals/Signin";

const Dashboard = () => {
  const [eventList, setEventList] = useState([]);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, navigate } = useContext(AuthContext);

  useEffect(() => {
    const getEventList = async () => {
      const eventsData = [];
      try {
        const querySnapshot = await getDocs(collection(db, "event"));
        querySnapshot.forEach((doc) => {
          eventsData.push(doc.data());
        });

        const filteredEvents = eventsData.filter(
          (event) => event.eventData?.uid === user?.uid,
        );
        setEventList(filteredEvents);

        // Set initial values only after data is fetched
        if (filteredEvents.length > 0) {
          setCurrentPreview(filteredEvents[0]);
          setActive(filteredEvents[0].eventData.eventId);
        }

        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getEventList();
  }, [user, navigate]);

  if (!user) {
    return <Signin />;
  } else if (loading) {
    return (
      <div className="my-[56px] flex w-full items-center justify-center">
        <img width={48} src={loader} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full space-y-16">
          <div className="space-y-5">
            <h5 className="text-[24px] font-medium">Events</h5>
            <div className="flex flex-col gap-3 tablet:flex-row">
              <div
                className="flex h-[206px] w-full max-w-[265px] cursor-pointer flex-col items-center justify-center gap-4 rounded-[10px] border-[1px] border-[#E4E4E4] bg-white"
                onClick={() => navigate("/create")}
              >
                <img src={addIcon} alt="" />
                <p className="font-normal text-black">create event</p>
              </div>
              {eventList &&
                eventList.map((events) => (
                  <AvailableEvents
                    events={events}
                    active={active}
                    setActive={setActive}
                    currentPreview={currentPreview}
                    setCurrentPreview={setCurrentPreview}
                    key={events.eventData.eventId}
                  />
                ))}
            </div>
          </div>
          {currentPreview && (
            <div className="flex flex-col gap-5">
              <h5 className="text-[24px] font-medium">{`Event/${currentPreview?.eventData?.eventType}`}</h5>
              <PreviewAvailableEvents
                currentPreview={currentPreview}
                setCurrentPreview={setCurrentPreview}
              />
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Dashboard;
