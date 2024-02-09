import React, { useState } from "react";

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
          <div className="field_set_div">
            <label htmlFor="start_date">Start Date</label>
            <input
              type="date"
              name="start_date"
              id="start_date"
              className="inputs tablet:max-w-full max-w-[150px]"
            />
          </div>

          <div className="field_set_div">
            <label htmlFor="end_date">End Date</label>
            <input
              type="date"
              name="end_date"
              id="end_date"
              className="inputs tablet:max-w-full max-w-[150px]"
            />
          </div>
        </div>

        <div className="event_schedule_duration">
          <div className="field_set_div">
            <label htmlFor="start_time">Start Time</label>
            <input
              type="time"
              name="start_time"
              id="start_time"
              className="inputs tablet:max-w-full max-w-[150px]"
            />
          </div>

          <div className="field_set_div">
            <label htmlFor="end_time">End Time</label>
            <input
              type="time"
              name="end_time"
              id="end_time"
              className="inputs tablet:max-w-full max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
