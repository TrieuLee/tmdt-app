import React, { useContext, useRef, useState } from "react";
// import component
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../callAPIs";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import domain from "../../utils/domain";
//import style
import CircularProgress from "@mui/material/CircularProgress";

import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  console.log(domain);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [values, setValues] = useState({ password: "", showPassword: false });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            className="loginBox"
            onSubmit={handleClick}
          >
            <TextField
              required
              id="outlined-required"
              label="Email"
              inputRef={email}
            />
            <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" required>
                Mật khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                inputRef={password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <span className="loginForgot">Quên mật khẩu?</span>

            <Button
              variant="contained"
              className="loginButon"
              type="submit"
              disabled={isFetching}
            >
              {isFetching ? <CircularProgress color="inherit" /> : "Đăng nhập"}
            </Button>

            <Button variant="contained " className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" />
              ) : (
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Thành viên mới
                </Link>
              )}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
