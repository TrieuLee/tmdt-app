import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../context/AuthContext";
import { IconButton } from "@mui/material";
import Settings from "@mui/icons-material/Settings";

export default function NavDropDown() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    const answer = window.confirm("Bạn có chắc chắn đăng xuất?");
    if (answer) {
      localStorage.clear("user", user);
      navigate("/");
      window.location.reload(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>

        <Typography sx={{ ml: 2, color: "#eee" }}>
          Xin chào {user.user.username}
        </Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Hồ sơ cá nhân
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Link
            to="/change-profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Đổi mật khẩu{" "}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
}
