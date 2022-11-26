import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

//import style
import "./register.scss";

export default function Register() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const username = useRef();
  const address = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  // MUI
  const [values, setValues] = useState({ passwords: "", showPasswords: false });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPasswords: !values.showPasswords,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // MUI

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Mật khẩu không khớp");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        address: address.current.value,
        phone: phone.current.value,
      };
      try {
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="register"
      style={{
        backgroundImage: "url(" + PF + "img/5482397.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">.Sneaker</h3>
          <span className="registerDesc" style={{ color: "white" }}>
            Hãy là thời trang của chính mình
          </span>
        </div>
        <div className="registerRight">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            className="registerBox"
            onSubmit={handleClick}
          >
            <TextField
              required
              id="outlined-required"
              label="Tên khách hàng"
              inputRef={username}
            />
            <TextField
              required
              id="outlined-required"
              label="Số điện thoại"
              inputRef={phone}
            />
            <TextField
              required
              id="outlined-required"
              label="Địa chỉ"
              inputRef={address}
            />

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
                type={values.showPasswords ? "text" : "password"}
                value={values.passwords}
                onChange={handleChange("passwords")}
                inputRef={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPasswords ? (
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
            <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" required>
                Xác nhận mật khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPasswords ? "text" : "password"}
                value={values.passwords}
                onChange={handleChange("passwords")}
                inputRef={confirmPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPasswords ? (
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
            <Button variant="contained" className="registerButon" type="submit">
              Đăng nhập
            </Button>
          </Box>
          {/* <form className="registerRight" onSubmit={handleClick}>
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
        </form> */}
        </div>
      </div>
    </div>
  );
}
