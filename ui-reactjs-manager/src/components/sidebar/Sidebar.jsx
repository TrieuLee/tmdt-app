import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router-dom";
import { FaStripe } from "react-icons/fa";
export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={PF + "img/sneakers.png"}
            alt=""
            className="sidebarFriendImg"
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Trang chủ</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Trang chủ</span>
            </li>
          </Link>
          <p className="title">Danh mục</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng </span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sản phẩm</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Giao hàng</span>
            </li>
          </Link>

          <Link
            to={`//dashboard.stripe.com/test/dashboard`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <FaStripe style={{ color: "#eee", fontSize: "20px" }} />
              <span>Stripe</span>
            </li>
          </Link>

          <Link to="/statistic" style={{ textDecoration: "none" }}>
            <li>
              <LeaderboardIcon className="icon" />
              <span>Báo cáo doanh thu</span>
            </li>
          </Link>

          <p className="title">Thông tin nhân viên</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ nhân viên</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
