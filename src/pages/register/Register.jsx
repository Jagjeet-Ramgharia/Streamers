import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import "./register.scss";

function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef();
    const usernameRef = useRef()
    const history = useHistory()

    const handleRegister = () =>{
        setEmail(emailRef.current.value);
    }

    const handleFinish = async (e) =>{
        e.preventDefault()
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value)
        try{
            await axios.post('/auth/register', {email,password,username});
            history.push("/login")
        }catch(err){
          console.log(err)
        }
    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <h1>Streamers</h1>
          <button className="login_btn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and many more</h1>
        <h2>Watch anywhere, cancel anytime</h2>
        <p>Ready to watch ? Enter your Email to create your account</p>
        {!email ? (       
         <div className="input">
          <input
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            ref={emailRef}
          />
          <button className="register_Btn" onClick={handleRegister}>Register</button>
        </div>) : (
            <form className="input">
            <input
            type="text"
            placeholder="Set Username"
            required
            autoComplete="off"
            ref={usernameRef}
          />
          <input
            type="password"
            placeholder="Set Password"
            required
            autoComplete="off"
            ref={passwordRef}
          />
          <button className="register_Btn" onClick={handleFinish}>Start</button>
        </form>
        )}
      </div>
    </div>
  );
}

export default Register;
