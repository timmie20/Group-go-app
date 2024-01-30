import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import TemplatePage from "./Pages/TemplatePage";
import EventInfoPage from "./Pages/EventInfoPage";
import { AppProvider } from "./context/AppContext";
import PaymentPage from "./Pages/PaymentPage";
import SendInvitationPage from "./Pages/SendInvitationPage";

const App = () => {
  return (
    <>
      <AppProvider>
        <AppLayout>
          <Routes>
            <Route path="chooseTemplate" element={<TemplatePage />} />
            <Route path="eventInformation" element={<EventInfoPage />} />
            <Route path="paymentinformation" element={<PaymentPage />} />
            <Route path="sendInvitation" element={<SendInvitationPage />} />
          </Routes>
        </AppLayout>
      </AppProvider>
    </>
  );
};

export default App;
