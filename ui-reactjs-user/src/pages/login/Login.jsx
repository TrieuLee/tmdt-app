import React, { useState, useContext, useRef } from "react";
// import component
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

// import component
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../callAPIs";

//import style
import "./login.scss";

export default function Login() {
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

  const { user, isFetching, dispatch } = useContext(AuthContext);
  const email = useRef();
  const passwords = useRef();
  const handleClick = (e) => {
    console.log(dispatch);
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: passwords.current.value },
      dispatch
    );
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
            noValidate
            autoComplete="off"
            className="loginBox"
            onSubmit={handleClick}
          >
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              inputRef={email}
            />
            <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
              <InputLabel id="outlined-adornment-password" required>
                Mật khẩu
              </InputLabel>
              <OutlinedInput
                inputRef={passwords}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
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

            <Button variant="contained" className="loginButon" type="submit">
              <Link style={{ textDecoration: "none", color: "white" }}>
                Đăng nhập
              </Link>
            </Button>

            <Button variant="contained " className="loginRegisterButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/register"
              >
                Thành viên mới ?
              </Link>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
