import React, { useState } from "react";
import InputField from "./InputField";

const EventSchedule = ({ eventInfo, handleChangeForEventInfo }) => {
  const [current, setCurrent] = useState("Single event");

  const schedules = ["Single event", "Montly", "Weekly", "Yearly"];

  return (
    <>
      <div className="event_schedule_container">
        <div className="select_schedule_container">
          {schedules.map((schedule, i) => (
            <span
              key={i}
              className={`schedule_period ${
                current === schedule ? "selected_schedule_period" : ""
              }`}
              onClick={(e) => setCurrent(e.target.innerText)}
            >
              {schedule}
            </span>
          ))}
        </div>

        <div className="event_schedule_duration">
          <InputField
            id="start_date"
            type="date"
            label="Start Date"
            name="startDate"
            value={eventInfo.startDate}
            onChange={handleChangeForEventInfo}
          />

          <InputField
            id="end_date"
            type="date"
            label="End Date"
            name="endDate"
            value={eventInfo.endDate}
            onChange={handleChangeForEventInfo}
          />
        </div>

        <div className="event_schedule_duration">
          <InputField
            id="start_time"
            type="time"
            label="Start Time"
            name="startTime"
            value={eventInfo.startTime}
            onChange={handleChangeForEventInfo}
          />

          <InputField
            id="end_time"
            type="time"
            label="End Time"
            name="endTime"
            value={eventInfo.endTime}
            onChange={handleChangeForEventInfo}
          />
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
