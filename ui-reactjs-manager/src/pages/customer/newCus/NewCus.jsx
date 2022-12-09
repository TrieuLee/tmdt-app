import React, { useState, useRef } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./New.scss";
import domain from "../../../utils/domain";
export default function New({ title }) {
  const username = useRef();
  const address = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
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
        await axios.post(`${domain}/api/auth/register`, user);
        navigate("/users");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              autoComplete="off"
              onSubmit={handleClick}
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin cá nhân
                  </Typography>

                  <TextField
                    required
                    id="outlined-username"
                    label="Tên khách hàng"
                    inputRef={username}
                  />
                  <TextField
                    required
                    id="outlined-phone"
                    label="Số điện thoại"
                    inputRef={phone}
                  />
                  <TextField
                    required
                    id="outlined-address"
                    label="Địa chỉ"
                    inputRef={address}
                  />

                  <TextField
                    required
                    id="outlined-email"
                    label="Email"
                    inputRef={email}
                  />
                </div>
                <div>
                  <Typography variant="p" component="h2" sx={{ mt: 2 }}>
                    Điểm tích lũy
                  </Typography>
                  <TextField
                    disabled
                    id="outlined-basic"
                    label="Điểm thưởng"
                    variant="outlined"
                  />
                  <TextField
                    disabled
                    id="outlined-basic"
                    label="Thành viên"
                    variant="outlined"
                  />
                </div>
                <div>
                  <Typography variant="p" component="h2" sx={{ mt: 2 }}>
                    Bảo mật
                  </Typography>
                  <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Mật khẩu
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      inputRef={password}
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
                  <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Xác nhận mật khẩu
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      inputRef={confirmPassword}
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
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>

              <Button variant="contained">Đặt lại</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
