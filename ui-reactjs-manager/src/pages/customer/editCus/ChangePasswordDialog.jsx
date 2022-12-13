import React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function ChangePassword(props) {
  const {open, onClose} = props
  return  (<div>

  <Dialog open ={open} onClose ={onClose}>
    <DialogTitle>Thay đổi mật khẩu</DialogTitle>
    <DialogContent>
      {/* if (password !== "") */}
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
      />
            {/* <div>
                  <Typography variant="p" component="h2" sx={{ mt: 2 }}>
                    Đặt lại Mật khẩu?
                  </Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Mật khẩu"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    id="outlined-confirm-password-input"
                    label="Xác nhận mật khẩu"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setCfrpass(e.target.value)}
                  />
                </div> */}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onClose}>Subscribe</Button>
    </DialogActions>
  </Dialog>
</div>)
}
