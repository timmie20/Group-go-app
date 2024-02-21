import React, { useState } from "react";
import InputField from "./InputField";

const EventSchedule = ({ values, handleChange }) => {
  const [current, setCurrent] = useState("Single event");

  const schedules = ["Single event", "Montly", "Weekly", "Yearly"];

  const handleScheduleChange = (e) => {
    setCurrent(e.target.innerText);
  };

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
              onClick={handleScheduleChange}
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
            name="eventInfo.startDate"
            value={values.eventInfo.startDate}
            onChange={handleChange}
          />

          <InputField
            id="end_date"
            type="date"
            label="End Date"
            name="eventInfo.endDate"
            value={values.eventInfo.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="event_schedule_duration">
          <InputField
            id="start_time"
            type="time"
            label="Start Time"
            name="eventInfo.startTime"
            value={values.eventInfo.startTime}
            onChange={handleChange}
          />

          <InputField
            id="end_time"
            type="time"
            label="End Time"
            name="eventInfo.endTime"
            value={values.eventInfo.endTime}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
