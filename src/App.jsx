import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AppProvider } from "./context/AppContext";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";
import Signin from "./components/Signin";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <AppProvider>
          <AppLayout>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/create" element={<CreateEvent />} />
              </Route>
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </AppLayout>
        </AppProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
