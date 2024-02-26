import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useParams } from "react-router-dom";
import location from "../assets/images/location.svg";
import profile from "../assets/images/profile.svg";
import instagram from "../assets/images/instagram.svg";
import mapImg from "../assets/images/map.svg";
import dateImg from "../assets/images/date.svg";
import moneyImg from "../assets/images/money.svg";
import loader from "../assets/images/orange-loader.svg";
import PageNotFound from "./PageNotFound";

const Event = () => {
  const [loading, setLoading] = useState(true);
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventData();
  }, [eventId]);

  const getEventData = async () => {
    const docRef = doc(db, "event", eventId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log(docSnap.data())
      setEvent(docSnap.data().eventData);
      setLoading(false);
      console.log(event);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="my-[56px] flex w-full items-center justify-center">
        <img width={48} src={loader} alt="" />
      </div>
    );
  } else if (event) {
    return (
      <div>
        <img
          className="h-[403px] w-full rounded-[10px] object-cover"
          src={event?.eventImg}
          alt=""
        />

        <div className="my-[55px] flex flex-wrap gap-10">
          <div className="flex w-fit max-w-full flex-col gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <h3>{event?.eventType}</h3>
              <div className="flex items-center gap-[22px]">
                <div className="flex items-center gap-[8px]">
                  <img src={location} alt="" />
                  <p>{event?.eventInfo?.eventLocation}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src={profile} alt="" />
                  <p>{event?.eventInfo?.typeOfParticipants}</p>
                </div>
              </div>
            </div>

            <div>
              <p>30 spots left</p>
              <button className="w-full rounded-[15px] bg-[#e2614b] px-[24px] py-[10px] text-[#fff]">
                Apply for event
              </button>
            </div>

            <div>
              <h3>Event Description</h3>
              <p>{event?.eventInfo?.eventDesc}</p>
            </div>

            <div>
              <h3>Event Host/Creator</h3>
              <div className="flex items-center gap-[16px]">
                <p>{event?.eventInfo?.creatorName}</p>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-fit max-w-full flex-col gap-[18px]">
            <div className="flex gap-4">
              <div className="flex h-[149px] w-[50%] flex-col justify-between rounded-[10px] bg-[#f7f6f9] p-[18px]">
                <div className="flex items-center gap-[8px]">
                  <img src={dateImg} alt="" />
                  <p>Date and time</p>
                </div>

                <div className="">
                  <h5>{`${event?.eventInfo?.startDate} to ${event?.eventInfo?.endDate}`}</h5>
                  <h5>{`${event?.eventInfo?.startTime} to ${event?.eventInfo?.endTime}`}</h5>
                </div>
              </div>

              <div className="flex h-[149px] w-[50%] flex-col justify-between rounded-[10px] bg-[#f7f6f9] p-[18px]">
                <div className="flex items-center gap-[8px]">
                  <img src={moneyImg} alt="" />
                  <p>Commitment per person</p>
                </div>

                <div>
                  <h5>{event?.eventInfo?.amountPerParticipant}</h5>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <p>Location</p>
              <img src={mapImg} alt="" className="map w-full" />
              {/* <div className="w-full"><iframe width="100%" height="281" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};
export default Event;
