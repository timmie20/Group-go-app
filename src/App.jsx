import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AppProvider } from "./context/AppContext";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";
import { AuthContextProvider } from "./context/AuthContext";
import { FormContextProvider } from "./context/FormContext";
import Event from "./Pages/Event";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <AppProvider>
          <FormContextProvider>
            <AppLayout>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/create" element={<CreateEvent />} />
                  <Route path="/:eventId" element={<Event />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </AppLayout>
          </FormContextProvider>
        </AppProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
