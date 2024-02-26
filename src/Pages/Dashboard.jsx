import React, { useContext, useEffect } from "react";
import AvailableEvents from "../components/AvailableEvents";
import PreviewAvailableEvents from "../components/PreviewAvailableEvents";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import loader from "../assets/images/orange-loader.svg";

const Dashboard = () => {
  const [eventList, setEventList] = useState([]);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, search } = useContext(AuthContext);

  const getEventList = async () => {
    const eventsData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "event"));
      querySnapshot.forEach((docs) => {
        eventsData.push(docs.data());
      });
      setEventList(
        eventsData.filter((event) => event.eventData?.uid === user?.uid),
      );
      setLoading(false);
      setCurrentPreview(eventList[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEventList();
    console.log("hello");
  }, [eventList]);

  if (loading) {
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
            <h5 className="text-[24px] font-medium">Events/</h5>
            <div className="flex items-center gap-5">
              <div className=" flex h-[208px] w-[256px] cursor-pointer flex-col items-center justify-center rounded-[10px] border-[1px] border-[#E4E4E4] bg-white">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0003 17.8334H17.3337V24.5C17.3337 25.2334 16.7337 25.8334 16.0003 25.8334C15.267 25.8334 14.667 25.2334 14.667 24.5V17.8334H8.00033C7.26699 17.8334 6.66699 17.2334 6.66699 16.5C6.66699 15.7667 7.26699 15.1667 8.00033 15.1667H14.667V8.50004C14.667 7.7667 15.267 7.1667 16.0003 7.1667C16.7337 7.1667 17.3337 7.7667 17.3337 8.50004V15.1667H24.0003C24.7337 15.1667 25.3337 15.7667 25.3337 16.5C25.3337 17.2334 24.7337 17.8334 24.0003 17.8334Z"
                    fill="black"
                  />
                </svg>
                <p className="font-normal text-black">create event</p>
              </div>
              {eventList.map((events) => (
                <AvailableEvents
                  events={events}
                  key={events.eventData.eventId}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="text-[24px] font-medium">{`Event/${currentPreview?.eventData?.eventType}`}</h5>
            <PreviewAvailableEvents
              currentPreview={currentPreview}
              setCurrentPreview={setCurrentPreview}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
