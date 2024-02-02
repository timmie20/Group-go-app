import React, { useContext } from "react";
import cover from "../assets/images/resturant image.jpeg";
import EventSchedule from "./EventSchedule";
import { AppContext } from "../context/AppContext";

const TemplateEventForm = () => {
  const { selectedTemplate, setCurrentStep, stepData } = useContext(AppContext);

  return (
    <>
      <form className="event_info_form">
        <div className="space-y-3">
          <p className="font-normal">{selectedTemplate.templateName}</p>
          <div className="relative">
            <img
              src={cover}
              alt="a cover image illustration of a resturant"
              className="h-[189px] w-full rounded-xl object-cover"
            />
            <label
              htmlFor="file-upload"
              className="absolute inset-0 m-auto flex items-center justify-center"
            >
              <div className="flex items-center gap-3">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5C1.45 18.5 0.979333 18.3043 0.588 17.913C0.196667 17.5217 0.000666667 17.0507 0 16.5V2.5C0 1.95 0.196 1.47933 0.588 1.088C0.98 0.696667 1.45067 0.500667 2 0.5H16C16.55 0.5 17.021 0.696 17.413 1.088C17.805 1.48 18.0007 1.95067 18 2.5V16.5C18 17.05 17.8043 17.521 17.413 17.913C17.0217 18.305 16.5507 18.5007 16 18.5H2ZM2 16.5H16V2.5H2V16.5ZM3 14.5H15L11.25 9.5L8.25 13.5L6 10.5L3 14.5Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[16px] font-medium text-white">
                  Change event photo
                </span>
              </div>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>
        </div>

        <div className="email_field_div">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="inputs"
          />
        </div>

        <div>
          <h4>Tell us about your event</h4>
          <div className="field_set_div">
            <label htmlFor="description"> Event Description</label>
            <textarea
              name="description"
              id="description"
              cols="50"
              rows="4"
              placeholder="Fan Hangout..."
              className="event_description_textarea "
            ></textarea>
          </div>
        </div>

        <div>
          <h4>Where are you having the event?</h4>
          <div className="field_set_div">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Where are you having the event?"
              className="inputs"
            />
          </div>
        </div>

        <div>
          <h4>When is the event?</h4>
          <EventSchedule />
        </div>

        <div className="flex flex-col">
          <h4>Who’s attending the event?</h4>
          <div className="space-y-6">
            <div className="field_set_div">
              <label htmlFor="min_num_participant">
                Minimum number of participants
              </label>
              <input
                type="number"
                id="min_num_participant"
                name="min_num_participant"
                placeholder="Minimum"
                className="inputs"
              />
            </div>

            <div className="field_set_div">
              <label htmlFor="max_num_participant">
                Maximum number of participants
              </label>
              <input
                type="number"
                id="max_num_participant"
                name="max_num_participant"
                placeholder="Maximum"
                className="inputs"
              />
            </div>

            <div className="field_set_div">
              <label htmlFor="gender">Participants gender</label>
              <select name="gender" id="gender">
                <option value="">select an option</option>
                <option value="males">All male</option>
                <option value="females">All female</option>
                <option value="both genders">Both male and female</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h4>How much is the event</h4>
          <div className="field_set_div">
            <label htmlFor="amount">Amount per person</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="0.00 (NGN)"
              className="inputs"
            />
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => setCurrentStep(stepData[2])}
            className="primary_button block"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default TemplateEventForm;
