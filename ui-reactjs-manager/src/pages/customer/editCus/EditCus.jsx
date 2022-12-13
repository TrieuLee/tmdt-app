import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./Edit.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import domain from "../../../utils/domain";
import ChangePasswordDialog from "./ChangePasswordDialog.jsx";
export default function EditCus({ inputs, title }) {
  const [userName, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfrpass, setCfrpass] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({ password: "", showPassword: false });
  const setData = () => {
    setUsername(JSON.parse(localStorage.getItem("editUser")).username);
    setAddress(JSON.parse(localStorage.getItem("editUser")).address);
    setphone(JSON.parse(localStorage.getItem("editUser")).phone);
    setEmail(JSON.parse(localStorage.getItem("editUser")).email);
  };
  useEffect(() => {
    if (localStorage.getItem("editUser")) {
      setData();
    }
  }, []);
  const emailNu = JSON.parse(localStorage.getItem("editUser")).email;
  console.log(emailNu);
  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== "") {
      window.alert(
        `Đã thay đổi mật khẩu. Nhân viên vui lòng thông báo cho khách hàng thông qua email: ${emailNu} `
      );
    }
    if (password !== cfrpass) {
      console.log("khoong trung mk");
    } else {
      const user = {
        username: userName ? userName : undefined,
        email: email ? email : undefined,
        password: password ? password : undefined,
        address: address ? address : undefined,
        phone: phone ? phone : undefined,
      };

      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const id = JSON.parse(localStorage.getItem("editUser"))._id;
        await axios.put(`${domain}/api/users/${id}/${header}`, user);
        navigate("/users");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <div className="top">
          <h1 style={{ color: "black" }}>{title}</h1>
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
              noValidate
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin cá nhân Khách hàng
                  </Typography>

                  <TextField
                    id="outlined-username"
                    label="Tên khách hàng"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                  />
                  <TextField
                    id="outlined-phone"
                    label="Số điện thoại"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <TextField
                    id="outlined-address"
                    label="Địa chỉ"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    id="outlined-email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "none" }}
                  color="error"
                >
                  Thay đổi mật khẩu cho người dùng
                </Button>
                <ChangePasswordDialog
                  open={open}
                  onClose={handleClose}
                  setPassword={setPassword}
                  setCfrpass={setCfrpass}
                />
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained" onClick={setData}>
                Đặt lại
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
