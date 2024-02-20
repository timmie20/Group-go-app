import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AppProvider } from "./context/AppContext";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";
import { AuthContextProvider } from "./context/AuthContext";
import FormContext from "./context/FormContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <AppProvider>
          <AppLayout>
            <FormContext>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/create" element={<CreateEvent />} />
                </Route>
              </Routes>
            </FormContext>
          </AppLayout>
        </AppProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
