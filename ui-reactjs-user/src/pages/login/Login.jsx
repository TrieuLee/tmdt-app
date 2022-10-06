import React from "react";
// import component
//import style
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">.Sneaker</h3>
          <span className="loginDesc">By your Fashion and Enjoy yourself</span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="loginInput"
              required
              minLength="8"
            />
            <button className="loginButon" type="submit">
              Login
            </button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Register new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
