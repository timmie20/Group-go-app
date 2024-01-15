import React from "react";

const UncheckedIcon = ({ step, setCurrentStep }) => {
  return (
    <div
      className="h-8 w-8 rounded-full border-[1px] border-[#06081133]"
      onClick={() => setCurrentStep(step.id)}
    ></div>
  );
};

export default UncheckedIcon;
