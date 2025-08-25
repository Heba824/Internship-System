import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Student from "./components/Student";
import PROStudent from "./components/PROStudent";
import Scad from "./components/scad"; // Import the SCAD component
import WorkshopPage from "./components/WorkshopPage"; // Import WorkshopPage
import Faculty from "./components/Faculty"; // Import Faculty component
import Appointments from "./components/Appointments";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("isLoggedIn")
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("isLoggedIn"));
      setUserRole(localStorage.getItem("userRole"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
            }
          />

          {/* Default dashboard fallback */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />

          {/* Student dashboard */}
          <Route
            path="/student-dashboard"
            element={
              isLoggedIn && userRole === "student" ? (
                <Student />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* PRO Student dashboard */}
          <Route
            path="/prostudent-dashboard"
            element={
              isLoggedIn && userRole === "prostudent" ? (
                <PROStudent />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* SCAD Office dashboard */}
          <Route
            path="/scad-dashboard"
            element={
              isLoggedIn && userRole === "scad" ? (
                <Scad />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Faculty dashboard */}
          <Route
            path="/faculty-dashboard"
            element={
              isLoggedIn && userRole === "faculty" ? (
                <Faculty />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Workshop Page */}
          <Route
            path="/workshops"
            element={
              isLoggedIn && userRole === "scad" ? (
                <WorkshopPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Appointments page */}
          <Route
            path="/appointments"
            element={
              isLoggedIn ? (
                <Appointments />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
