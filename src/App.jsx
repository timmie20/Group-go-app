import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AppProvider } from "./context/AppContext";
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
              <Route path="/create" element={<CreateEvent />} />
            </Route>
          </Routes>
        </AppLayout>
      </AppProvider>
    </>
  );
};

export default App;
