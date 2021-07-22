import "./Login.scss";

function Register() {
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
          <input type="text" autoComplete="off" placeholder="Email"/>
          <input type="password" autoComplete="off" placeholder="Password"/>
          <button className="login_btn">Sign In</button>
          <span>New to Streamers ? <b>Sign Up now.</b></span>
          <small>This page is protected by Google to ensure you are not a robot. <b>Learn more</b></small>
        </form>
      </div>
    </div>
  );
}

export default Register;
