import React, { useEffect, useState } from "react";
import UncheckedIcon from "./UncheckedIcon";
import imageIllustration from "../assets/images/Three girlfriends drink tea at home and talk.png";
import { useLocation } from "react-router-dom";
import CheckedIcon from "./CheckedIcon";
import { getData } from "../data";

const StepProgress = () => {
  const { stepData } = getData();
  const { pathname } = useLocation();
  const [currentStep, setCurrentStep] = useState();

  useEffect(() => {
    setCurrentStep(pathname);
  }, [pathname]);

  const stepInfo = stepData?.find((step) => {
    if ("/create" + step.path === pathname) {
      return step;
    }
  });

  return (
    <>
      <div className="step_progress_container">
        <div className="flex flex-col gap-6">
          <h2 className="leading-[68px]">{stepInfo?.step}</h2>
          <p>{stepInfo?.about}</p>
          <p className="font-normal text-black ">{`step ${stepInfo?.id} of ${stepData?.length}`}</p>
          <div className="flex flex-col gap-8">
            {stepData?.map((step, i) => (
              <div className="step_item" key={i}>
                
                  <CheckedIcon />
                  {/* <UncheckedIcon /> */}
                
                <p className="font-light text-black">{step?.step}</p>
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
