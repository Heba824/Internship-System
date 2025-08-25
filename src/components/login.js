
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn, setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase().replace(/\s/g, "");
    const trimmedPassword = password.trim().replace(/\s/g, "");
  
    const dummyCredentials = {
      "student@guc.edu.eg": "student123",
      "prostudent@guc.edu.eg": "prostudent123",
      "company@guc.edu.eg": "company123",
      "scad@guc.edu.eg": "scad123",
      "faculty@guc.edu.eg": "faculty123",
    };
  
    if (
      dummyCredentials[trimmedEmail] &&
      dummyCredentials[trimmedEmail] === trimmedPassword
    ) {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
  
      // Determine and set role
      if (trimmedEmail === "student@guc.edu.eg") {
        localStorage.setItem("userRole", "student");
        setUserRole("student");
        navigate("/student-dashboard", { replace: true });
      } else if (trimmedEmail === "prostudent@guc.edu.eg") {
        localStorage.setItem("userRole", "prostudent");
        setUserRole("prostudent");
        navigate("/prostudent-dashboard", { replace: true });
      } else if (trimmedEmail === "scad@guc.edu.eg") {
        localStorage.setItem("userRole", "scad");
        setUserRole("scad");
        navigate("/scad-dashboard", { replace: true });
      } else if (trimmedEmail === "faculty@guc.edu.eg") {
        localStorage.setItem("userRole", "faculty");
        setUserRole("faculty");
        navigate("/faculty-dashboard", { replace: true });
      } else {
        localStorage.setItem("userRole", "other");
        setUserRole("other");
        navigate("/dashboard", { replace: true });
      }
    } else {
      setError("Invalid email or password");
    }
  };
  

  return (
    <div className="login-container slide-up">
      <div className="login-header">
        <span className="vertical-line" />
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
      <p className="forgot-password">Forgot your password?</p>
    </div>
  );
}

export default Login;
