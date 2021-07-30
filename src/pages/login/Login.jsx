import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./Login.scss";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login,dispatch} = useContext(AuthContext)

  const handleLogin = (e) =>{
    e.preventDefault();
    login({email,password},dispatch)
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <h1>Streamers</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_btn" onClick={handleLogin}>Sign In</button>
          <span>
            New to Streamers ? <b>Sign Up now.</b>
          </span>
          <small>
            This page is protected by Google to ensure you are not a robot.{" "}
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Register;
