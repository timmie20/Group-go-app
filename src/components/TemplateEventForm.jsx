import React, { useContext } from "react";
import cover from "../assets/images/resturant image.jpeg";
import EventSchedule from "./EventSchedule";
import { AppContext } from "../context/AppContext";
import InputField from "./InputField";
import { Field, Form, useFormikContext } from "formik";

const TemplateEventForm = () => {
  const { selectedTemplate, setCurrentStep, stepData } = useContext(AppContext);

  return (
    <>
      <Form className="event_info_form">
        <div className="mb-12 space-y-3">
          <p className="font-normal">{selectedTemplate.templateName}</p>
          <div className="relative w-full">
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

        <div className="space-y-7">
          <Field
            id="name"
            type="text"
            label="Creator name"
            name="eventInfo.creatorName"
            component={InputField}
            placeholder="name"
          />
          <Field
            id="email"
            type="email"
            label="Email address"
            name="eventInfo.creatorEmail"
            component={InputField}
            placeholder="Your email address"
          />
          <Field
            id="link"
            type="text"
            label="Social link"
            name="eventInfo.socialLink"
            component={InputField}
            placeholder="https://instagram.com/username (X, instagram, tiktok..)"
          />
          <h4>Tell us about your event</h4>
          <Field
            id="description"
            type="textarea"
            name="eventInfo.eventDesc"
            label="Event Description"
            component={InputField}
            className="event_description_textarea"
            placeholder="Fan Hangout..."
          />
        </div>

        <div className="space-y-7">
          <h4>Where are you having the event?</h4>
          <Field
            id="location"
            type="text"
            label="Location"
            name="eventInfo.eventLocation"
            component={InputField}
            placeholder="Where are you having the event?"
          />
        </div>

        <div>
          <h4>When is the event?</h4>
          <EventSchedule />
        </div>

        <div className="space-y-6">
          <h4>Who’s attending the event?</h4>
          <Field
            id="min_num_participant"
            type="number"
            label="Minimum number of participants"
            name="eventInfo.minNumOfParticipant"
            component={InputField}
            placeholder="Minimum"
          />

          <Field
            id="max_num_participant"
            type="number"
            label="Maximum number of participants"
            name="eventInfo.maxNumOfParticipant"
            component={InputField}
            placeholder="Maximum"
          />

          <div className="field_set_div">
            <label htmlFor="gender">Participants gender</label>
            <Field
              name="eventInfo.typeOfParticipants"
              id="gender"
              component="select"
              className="inputs"
            >
              <option value="">select an option</option>
              <option value="males">All male</option>
              <option value="females">All female</option>
              <option value="both genders">Both male and female</option>
            </Field>
          </div>
        </div>

        <div className="space-y-6">
          <h4>How much is the event</h4>
          <Field
            id="amount"
            type="text"
            label="Amount per person"
            name="eventInfo.amountPerParticipant"
            component={InputField}
            placeholder="0.00 (NGN)"
          />
        </div>

        <div className="mt-12">
          <button
            onClick={() => setCurrentStep(stepData[2])}
            className="primary_button block"
            type="button"
          >
            Continue
          </button>
        </div>
      </Form>
    </>
  );
};

export default TemplateEventForm;
