import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import TemplatePage from "./Pages/TemplatePage";
import EventInfoPage from "./Pages/EventInfoPage";
import { AppProvider } from "./context/AppContext";
import PaymentPage from "./Pages/PaymentPage";
import SendInvitationPage from "./Pages/SendInvitationPage";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";

const App = () => {
  return (
    <>
      <AppProvider>
        <AppLayout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}/>
              <Route path="/create" element={<CreateEvent />}>
                <Route index element={<TemplatePage />} />
                <Route path="event" element={<EventInfoPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="invitation" element={<SendInvitationPage />} />
              </Route>
            </Route>
          </Routes>
        </AppLayout>
      </AppProvider>
    </>
  );
};

export default App;
