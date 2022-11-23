import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import style
import "./register.scss";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Mật khẩu không khớp");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("users/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">AlohaSocial</h3>
          <span className="registerDesc">
            Kết nối bạn bè và thế giới quanh bạn
          </span>
        </div>
        <form className="registerRight" onSubmit={handleClick}>
          <div className="registerBox">
            <input
              placeholder="Tên đăng nhập"
              type="text"
              className="registerInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="registerInput"
              ref={email}
              required
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="registerInput"
              ref={password}
              required
              minLength="8"
            />
            <input
              placeholder="Nhập lại mật khẩu"
              type="password"
              className="registerInput"
              ref={confirmPassword}
              required
              minLength="8"
            />
            <button className="registerButon">Đăng ký</button>
            <button className="registerLoginButton">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
}
