import React from "react";
import "./Dashboard.scss";

import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <div className="dashaboard">
      <div className="dashaboard--Content">
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
