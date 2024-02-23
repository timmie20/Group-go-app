import React, { useContext } from "react";
import StepProgress from "../components/StepProgress";
import { AppContext } from "../context/AppContext";
import TemplatePage from "../components/createEvent/TemplatePage";
import EventInfoPage from "../components/createEvent/EventInfoPage";
import PaymentPage from "../components/createEvent/PaymentPage";
import SendInvitationPage from "../components/createEvent/SendInvitationPage";

const CreateEvent = () => {
  const { currentStep } = useContext(AppContext);

  const mapping = {
    template: <TemplatePage />,
    event: <EventInfoPage />,
    payment: <PaymentPage />,
    invite: <SendInvitationPage />,
  };

  return (
    <>
      <StepProgress />
      {/* <div className="w-[479px] max-w-full"> */}
      <div className="max-w-full tablet:w-[60%] w-full">
        {mapping[currentStep.page]}
      </div>
    </>
  );
};

export default CreateEvent;
