import React, { useContext, useEffect, useState } from "react";
import UncheckedIcon from "./UncheckedIcon";
import imageIllustration from "../assets/images/Three girlfriends drink tea at home and talk.png";
import { useLocation } from "react-router-dom";
import CheckedIcon from "./CheckedIcon";
import { AppContext } from "../context/AppContext";

const StepProgress = () => {
  const { stepData, setStepData } = useContext(AppContext)
  const { pathname } = useLocation();
  const [stepInfo, setStepInfo] = useState(stepData[0])
  // const [paths, setPaths] = useState(['/create', '/create/event', '/'])

  const markChecked = (id) => {
    const newStep = stepData.map(step => {
      if (step.id === id) {
        return { ...step, checked: true }
      }
      else {
        return step
      }
    })
    setStepData(newStep)
    console.log(stepData)
  }

  useEffect(() => {
    stepData?.find((step) => {
      if ("/create" + step.path === pathname) {
        markChecked(step.id)
        setStepInfo(step)
        console.log(step)
      }
    });
  }, [pathname])

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
                  {step.checked ? <CheckedIcon /> : <UncheckedIcon /> }               
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
