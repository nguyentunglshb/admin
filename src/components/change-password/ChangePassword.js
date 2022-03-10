import React, { useContext, useState } from "react";
import "./ChangePassword.scss";
import background from "./background.png";
import logo from "../../assets/img/logo2.jpeg";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const {
    isLoggedIn,
    setIsLoggedIn,
    username,
    password,
    changePassword,
    loginSuccess,
  } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [acc, setAcc] = useState({ user: "", pass: "", new: "" });

  const onUserChange = (e) => {
    setUser(e.target.value);
    setAcc({ ...acc, user: e.target.value });
    console.log(e.target.value);
  };
  const onPassChange = (e) => {
    setPass(e.target.value);
    setAcc({ ...acc, pass: e.target.value });
  };
  const onConfirmChange = (e) => {
    setConfirm(e.target.value);
    setAcc({ ...acc, confirm: e.target.value });
  };

  const onSubmit = () => {
    // if (acc.pass === "abc" && acc.pass === "123") {
    //   loginSuccess();
    //   navigate("/home");
    //   return;
    // } else {
    //   return;
    // }
    console.log(username, password);
    if (acc.user === username && acc.pass === password) {
      changePassword({ newpass: acc.confirm });
      //   loginSuccess();
      navigate("/login");
    }
  };
  return (
    <div className="change-password">
      <div className="img">
        <img className="bg" src={background} alt="" />
        <div className="form">
          <p className="welcome">Welcome to</p>
          <p className="title">Change Password</p>
          <img src={logo} alt="" className="logo" />
          <p className="username">Enter your username</p>
          <input
            className="user-input"
            type="text"
            placeholder="Enter your username"
            value={user}
            onChange={onUserChange}
          />
          <p className="password">Enter your password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="pass-input"
            value={pass}
            onChange={onPassChange}
          />
          <p className="confirm">Enter your new password</p>
          <input
            type="password"
            placeholder="Enter your new password"
            className="confirm-input"
            value={confirm}
            onChange={onConfirmChange}
          />
          <button className="signin" onClick={onSubmit}>
            Change Password
          </button>

          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
