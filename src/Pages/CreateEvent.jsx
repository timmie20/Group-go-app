import React, { useContext } from "react";
import StepProgress from "../components/StepProgress";
import { AppContext } from "../context/AppContext";
import TemplatePage from "../components/createEvent/TemplatePage";
import EventInfoPage from "../components/createEvent/EventInfoPage";
import PaymentPage from "../components/createEvent/PaymentPage";
import SendInvitationPage from "../components/createEvent/SendInvitationPage";
import { AuthContext } from "../context/AuthContext";
import Signin from "../components/modals/Signin";

const CreateEvent = () => {
  const { currentStep } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const mapping = {
    template: <TemplatePage />,
    event: <EventInfoPage />,
    payment: <PaymentPage />,
    invite: <SendInvitationPage />,
  };

  return (
    <>
      {!user && <Signin />}
      <StepProgress />
      {mapping[currentStep.page]}
    </>
  );
};

export default CreateEvent;
