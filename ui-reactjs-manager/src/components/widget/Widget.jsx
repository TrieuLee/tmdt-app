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
  const [revene, setRevene] = useState(0);
  const [filterpro, setFilterPro] = useState("");
  let data;

  useEffect(() => {
    const getCus = async () => {
      try {
        const res = await axios.get(`${domain}/api/auth`);
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
        let initialValue = 0;
        res.data.forEach((element) => (initialValue += element.total));
        const temp = res.data.filter(
          (x) => x.delivery_status === "đã nhận đơn hàng"
        );
        setFilterPro(temp);
        setRevene(initialValue);
      } catch (err) {
        console.log(err);
      }
    };
    getCus();
    getOrders();
  }, [revene]);
  //temporary

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        amount: cus.length,
        title: "SỐ LƯỢNG NGƯỜI DÙNG",
        isMoney: false,
        link: "Xem chi tiết...",
        url: "/users",
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
        amount: pro.length,
        title: "ĐƠN ĐẶT HÀNG",
        isMoney: false,
        link: "Xem chi tiết...",
        url: "/orders",
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
        amount: revene,
        title: "DOANH THU SẢN PHẨM",
        isMoney: true,
        link: "Xem chi tiết...",
        url: "/orders",
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
        amount: filterpro.length,
        title: "ĐƠN HÀNG ĐANG THỰC HIỆN",
        isMoney: true,
        link: "Xem chi tiết...",
        url: "/orders",
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
          {data.isMoney && "$"} {data.amount}
        </span>
        <a className="link" href={data.url} style={{ textDecoration: "none" }}>
          {data.link}
        </a>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
}
