import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AppProvider } from "./context/AppContext";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Signin from "./components/modals/Signin";

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
            </Routes>
          </AppLayout>
        </AppProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
