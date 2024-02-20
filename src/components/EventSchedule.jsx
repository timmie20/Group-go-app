import React, { useState } from "react";
import InputField from "./InputField";
import { Field } from "formik";

const EventSchedule = () => {
  const [current, setCurrent] = useState("Single event");

  const schedules = ["Single event", "Montly", "Weekly", "Yearly"];

  const handleChange = (e) => {
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
              onClick={handleChange}
            >
              {schedule}
            </span>
          ))}
        </div>

        <div className="event_schedule_duration">
          <Field
            id="start_date"
            type="date"
            label="Start Date"
            name="eventInfo.startDate"
            component={InputField}
          />

          <Field
            id="end_date"
            type="date"
            label="End Date"
            name="eventInfo.endDate"
            component={InputField}
          />
        </div>

        <div className="event_schedule_duration">
          <Field
            id="start_time"
            type="time"
            label="Start Time"
            name="eventInfo.startTime"
            component={InputField}
          />

          <Field
            id="end_time"
            type="time"
            label="End Time"
            name="eventInfo.endTime"
            component={InputField}
          />
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
