import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import component
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../callAPIs";
//import style
import CircularProgress from "@mui/material/CircularProgress";
import "./login.scss";

export default function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
  };
  return (
    <div
    className="login"
    style={{
      backgroundImage: "url(" + PF + "img/5482397.jpg)",
      backgroundSize: "cover",
    }}
  >
          <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="loginLogo">.Sneaker</h3>
            <span className="loginDesc" style={{ color: "white" }}>
              Hãy là thời trang của chính mình
            </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="8"
            />
            <button className="loginButon" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" /> : "Đăng nhập"}
            </button>
            <span className="loginForgot">Quên mật khẩu?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" />
              ) : (
                "Đăng ký Tài khoản mới"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
