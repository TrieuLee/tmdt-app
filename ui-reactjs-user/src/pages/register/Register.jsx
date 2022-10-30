import React, { useState } from "react";
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
import "./register.scss";

export default function Register() {
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
        <form className="registerRight">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="off"
            className="registerBox"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Tên khách hàng"
              />
              <TextField
                required
                id="outlined-required"
                label="Số điện thoại"
              />
              <TextField required id="outlined-required" label="Địa chỉ" />

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
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Xác nhận mật khẩu
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
            <Button variant="contained" className="registerButon" type="submit">
              Đăng nhập
            </Button>

            <Button variant="contained " className="registerLoginButton">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/login"
              >
                Đã là thành viên ?
              </Link>
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
