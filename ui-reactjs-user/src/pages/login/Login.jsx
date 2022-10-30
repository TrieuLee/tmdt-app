import React, { useState } from "react";
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
            By your Fashion and Enjoy yourself
          </span>
        </div>
        <div className="loginRight">
          {/* <form className="loginBox">
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
              Đăng nhập
            </button>
            <span className="loginForgot">Quên mật khẩu?</span>
            <Link to="/register" className="">
              <button className="loginRegisterButton">
                Đăng ký thành viên mới
              </button>
            </Link>
          </form> */}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="off"
            className="loginBox"
          >
            <div>
              <TextField required id="outlined-required" label="Email" />
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <span className="loginForgot">Quên mật khẩu?</span>

            <Button variant="contained" className="loginButon" type="submit">
              Đăng nhập
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
