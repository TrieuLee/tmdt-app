import React from "react";
//import style
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">.Sneaker</h3>
          <span className="registerDesc">
            By your Fashion and Enjoy yourself
          </span>
        </div>
        <form className="registerRight">
          <div className="registerBox">
            <input
              placeholder="UserName"
              type="text"
              className="registerInput"
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="registerInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
              required
              minLength="8"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
              required
              minLength="8"
            />
            <button className="registerButon">Login</button>
            <button className="registerLoginButton">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
