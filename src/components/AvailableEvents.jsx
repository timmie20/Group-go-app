import React from "react";

const AvailableEvents = ({ events }) => {
  return (
    <>
      <div className="relative h-[206px] w-[50%] max-w-[256px]">
        <img
          src={events.eventData.eventImg}
          alt=""
          className="relative h-full w-full rounded-[10px]"
        />
        <p className=" absolute bottom-2 left-3 text-base font-normal text-white">
          {events.eventData.eventType}
        </p>
        <div className="absolute inset-0 h-3 rounded-t-[10px] bg-orange-clr"></div>
      </div>
    </>
  );
};

export default AvailableEvents;
