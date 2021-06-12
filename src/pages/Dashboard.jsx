import React from "react";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import Options from "../components/Options";

export default function Dashboard() {
  return (
    <div className="container dashboard-container">
      <TopNav style={{ color: "#1b1b1b" }} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <Typical wrapper="div" steps={["We have got some intel that might interest you", 2000]} />
        </div>

        <div className="options">
          <Options heading={"Social Media Users"} count={100} to="/socialmedia" />
        </div>
      </div>
    </div>
  );
}
