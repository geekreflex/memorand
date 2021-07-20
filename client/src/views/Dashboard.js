import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>{user.firstName.toUpperCase()} Dashboard</h1>
    </div>
  );
};

export default Dashboard;
