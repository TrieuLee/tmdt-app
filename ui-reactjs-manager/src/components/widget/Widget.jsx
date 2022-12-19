import React, { useState, useEffect } from "react";
import "./Widget.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import domain from "../../utils/domain";
export default function Widget({ type }) {
  const [cus, setCus] = useState("");
  const [order, setOrder] = useState("");
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
    const getPro = async () => {
      try {
        const res = await axios.get(`${domain}/api/products`);
        setPro(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getOrders = async () => {
      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const res = await axios.get(`${domain}/api/orders/${header}`);
        setOrder(res.data);

        let initialValue = 0;
        res.data.forEach((element) => {
          if (element.delivery_status === "Hoàn thành")
            initialValue += element.total;
        });
        const temp = res.data.filter((x) => {
          if (
            x.delivery_status !== "Hoàn thành" &&
            x.delivery_status !== "Hủy đơn hàng"
          ) {
            console.log(x);
            return x;
          }
        });
        setFilterPro(temp);

        setRevene(initialValue);
      } catch (err) {
        console.log(err);
      }
    };
    getCus();
    getOrders();
    getPro();
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
        title: "SỐ LƯỢNG SẢN PHẨM",
        isMoney: false,
        link: "Xem chi tiết...",
        url: "/products",
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
        <Link className="link" to={data.url} style={{ textDecoration: "none" }}>
          {data.link}
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
}
