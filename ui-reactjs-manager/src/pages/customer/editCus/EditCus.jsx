import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./Edit.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EditCus({ inputs, title }) {
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
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
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin cá nhân
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    label="Tên khách hàng"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Địa chỉ"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </div>
                
                <div>
                  <Typography variant="p" component="h2" sx={{ mt: 2 }}>
                    Bảo mật
                  </Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Mật khẩu"
                    type="password"
                    autoComplete="current-password"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Xác nhận mật khẩu"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <Button variant="contained" color="success">
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
