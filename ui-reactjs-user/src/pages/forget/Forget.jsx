import React, { useContext, useRef, useState } from "react";
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
import domain from "../../utils/domain";

export default function Forget() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.put(`${domain}/api/auth/forget`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
            <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-confirm-password" required>
                Xác nhận mật khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-confirm-password"
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
                label="Confirm Password"
              />
            </FormControl>
            <span className="loginForgot">Quên mật khẩu?</span>

            <Button
              variant="contained"
              className="loginButon"
              type="submit"
            ></Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
