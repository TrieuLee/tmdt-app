import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FaIgloo } from "react-icons/fa";

export default function ChangePassword(props) {
  const { open, onClose, setPassword, setCfrpass } = props;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Thay đổi mật khẩu</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-password-input"
            label="Mật khẩu"
            type="password"
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button onClick={onClose}>Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
