import React from "react";
import { Navigate } from "react-router-dom";

function Student() {
  // Check if the user is logged in and has the 'student' role
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "student") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome to the Student Dashboard!</p>
      {/* Add additional content specific to students */}
    </div>
  );
}

export default Student;
