import React from "react";
import Navbar from "../components/Navbar";
import StepProgress from "../components/StepProgress";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="app_container">
        <Navbar />
        <main className="app_body">
          <StepProgress />
          {children}
        </main>
      </div>
    </>
  );
};

export default AppLayout;
