import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import domain from "../../utils/domain";
import { useNavigate } from "react-router-dom";

export default function ChangeProfile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const theme = createTheme();
  const [password, setPassword] = useState("");
  const [cfrpass, setCfrpass] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (password !== cfrpass) {
      console.log("khoong trung mk");
      window.alert(`Không trùng mật khẩu`);
    } else {
      const user = {
        password: password ? password : undefined,
      };

      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const id = JSON.parse(localStorage.getItem("user")).user._id;

        await axios.put(`${domain}/api/users/password/${id}/${header}`, user);
        navigate("/");
      } catch (err) {}
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Thay đổi mật khẩu
          </Typography>
          <Box
            component="form"
            onSubmit={handleClick}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              id="outlined-password-input"
              label="Mật khẩu"
              type="password"
              sx={{ mt: 1 }}
              fullWidth
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="outlined-confirm-password-input"
              label="Xác nhận mật khẩu"
              type="password"
              sx={{ mt: 1 }}
              fullWidth
              autoComplete="current-password"
              onChange={(e) => setCfrpass(e.target.value)}
            />{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Chấp nhận
              {/* {isFetching ? <CircularProgress color="inherit" /> : "Đăng nhập"} */}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
