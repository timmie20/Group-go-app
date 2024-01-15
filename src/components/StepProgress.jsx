import React from "react";
import { useState } from "react";
import UncheckedIcon from "./UncheckedIcon";
import imageIllustration from "../assets/images/Three girlfriends drink tea at home and talk.png";

const StepProgress = () => {
  const [steps, setSteps] = useState([
    { id: 1, step: "choose event template" },
    { id: 2, step: "Event information" },
    { id: 3, step: "Payment information" },
    { id: 4, step: "Send invite link" },
  ]);

  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="step_progress_container ">
        <div className="flex flex-col gap-6">
          <h2 className="leading-[68px]">Choose event template</h2>
          <p>
            Pick the type of event you want to create so we can tailor your
            needs
          </p>
          <p className="font-normal text-black ">{`step ${currentStep} of ${steps.length}`}</p>
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div className="step_item" key={i}>
                <UncheckedIcon />
                <p className="font-light text-black">{step.step}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={imageIllustration}
            alt="Three girlfriends drink tea at home and talk image illustration"
          />
        </div>
      </div>
    </>
  );
};

export default StepProgress;
