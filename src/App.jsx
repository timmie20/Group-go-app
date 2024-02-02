import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import TemplatePage from "./components/createEvent/TemplatePage";
import EventInfoPage from "./components/createEvent/EventInfoPage";
import { AppProvider } from "./context/AppContext";
import PaymentPage from "./components/createEvent/PaymentPage";
import SendInvitationPage from "./components/createEvent/SendInvitationPage";
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
              {/* <Route path="/create" element={<CreateEvent />}>
                <Route index element={<TemplatePage />} />
                <Route path="event" element={<EventInfoPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="invitation" element={<SendInvitationPage />} />
              </Route> */}
              <Route path="/create" element={<CreateEvent />} />
            </Route>
          </Routes>
        </AppLayout>
      </AppProvider>
    </>
  );
};

export default App;
