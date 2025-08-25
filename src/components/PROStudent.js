import React from "react";
import { Navigate } from "react-router-dom";

function PROStudent() {
  // Check if the user is logged in and has the 'prostudent' role
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "prostudent") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>PRO Student Dashboard</h1>
      <p>Welcome to the PRO Student Dashboard!</p>
      {/* Add additional content specific to pro students */}
    </div>
  );
}

export default PROStudent;
