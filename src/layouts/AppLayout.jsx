import React from "react";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="app_container">
        <Navbar />
        <main className="app_body">{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
