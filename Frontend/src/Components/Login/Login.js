import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function Login() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const textFieldStyle = { width: "100%", marginTop: "1rem" };
  const fetchLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      // mode:'no-cors',
    });
    const data = await res.json();
    if (data.error) {
      setMessage(data.error);
    } else {
      navigator("/");
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify(data.users));
    }
  };
  return (
    <div className="Login">
      <form onSubmit={fetchLogin}>
        <h1>Login</h1>
        <p className="error_message">{message}</p>
        <div className="login_email">
          <TextField
          sx={textFieldStyle}
            id="outlined-basic"
            size="small"
            label="Email"
            variant="outlined"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_password">
          <TextField
          sx={textFieldStyle}
            id="outlined-basic"
            label="Password"
            size="small"
            variant="outlined"
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p className="no_account">
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
