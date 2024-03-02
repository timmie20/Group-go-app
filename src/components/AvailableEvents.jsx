import React from "react";

const AvailableEvents = ({ active, setActive, events, setCurrentPreview }) => {
  const handleSelect = (events) => {
    setCurrentPreview(events);
    setActive(events.eventData.eventId);
  };
  return (
    <>
      <div
        className="relative h-[206px] w-[50%] max-w-[256px]"
        onClick={() => handleSelect(events)}
      >
        <img
          src={events.eventData.eventImg}
          alt=""
          className="relative h-full w-full rounded-[10px]"
        />
        <p className=" absolute bottom-2 left-3 text-base font-normal text-white">
          {events.eventData.eventType}
        </p>
        <div
          className={
            active === events.eventData.eventId ? "current_preview" : ""
          }
        ></div>
      </div>
    </>
  );
};

export default AvailableEvents;
