import React, { useState, useEffect } from "react";
import "./Widget.scss";
import axios from "axios";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import domain from "../../utils/domain";
export default function Widget({ type }) {
  const [cus, setCus] = useState("");
  const [pro, setPro] = useState("");
  const [revene, setRevene] = useState({});
  let data;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${domain}/api/auth`);
        console.log(res.data);
        setCus(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getOrders = async () => {
      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const res = await axios.get(`${domain}/api/orders/${header}`);
        setPro(res.data);
        console.log(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    getOrders();
  }, []);
  //temporary

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        amount: cus.length,
        title: "SỐ LƯỢNG NGƯỜI DÙNG",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ĐƠN ĐẶT HÀNG",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "DOANH THU SẢN PHẨM",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "ĐƠN HÀNG ĐANG THỰC HIỆN",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
}
