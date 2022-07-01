import React, { useContext } from "react";
import "./DashboardContent.scss";
import { Pin } from "../../components/Card";
import { pins } from "../../data/pins";
import { OpenStatus } from "../../MainLayout/DashboardLayout/DashboardLayout";

const DashboardContent = () => {
  const state = useContext(OpenStatus);
  console.log("from dashboard content = " + state);
  return (
    <div className="dashboardContent">
      <div className={state ? "dashboardContent--Container" : "open"}>
        {pins.map((pin, index) => {
          let { url } = pin;
          return <Pin key={index} url={url} />;
        })}
      </div>
    </div>
  );
};

export default DashboardContent;
