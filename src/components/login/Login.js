import React, { useContext, useState } from "react";
import "./Login.scss";
import background from "./background.png";
import logo from "../../assets/img/logo2.jpeg";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, username, password, loginSuccess } =
    useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [acc, setAcc] = useState({ user: "", pass: "" });

  const onUserChange = (e) => {
    setUser(e.target.value);
    setAcc({ ...acc, user: e.target.value });
    console.log(e.target.value);
  };
  const onPassChange = (e) => {
    setPass(e.target.value);
    setAcc({ ...acc, pass: e.target.value });
  };

  const onSubmit = () => {
    // if (acc.pass === "abc" && acc.pass === "123") {
    //   loginSuccess();
    //   navigate("/home");
    //   return;
    // } else {
    //   return;
    // }
    if (acc.user === username && acc.pass === password) {
      loginSuccess();
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <div className="img">
        <img className="bg" src={background} alt="" />
        <div className="form">
          <p className="welcome">Welcome to</p>
          <p className="title">Sign in</p>
          <img src={logo} alt="" className="logo" />
          <p className="username">Enter your username</p>
          <input
            className="user-input"
            type="text"
            placeholder="Enter your username"
            value={user}
            onChange={onUserChange}
          />
          <p className="password">Enter your Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="pass-input"
            value={pass}
            onChange={onPassChange}
          />
          <button className="signin" onClick={onSubmit}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
