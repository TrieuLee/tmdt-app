import React, { useState, useEffect } from "react";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import vi from "moment/locale/vi";
import { FaCcStripe } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
export default function Datatable() {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [getdata, setGetData] = useState([]);
  const header = JSON.parse(localStorage.getItem("user")).accessToken;

  const { data, loading, error } = useFetch(`${domain}/api/orders/${header}`);
  useEffect(() => {
    const getStatistic = () => {
      let sortOrder = [...data];
      console.log(sortOrder);

      const x = sortOrder.filter((item) => {
        if (
          item.delivery_status === "Hoàn thành" &&
          Date.parse(dateIn) <= Date.parse(item.createdAt.slice(0, 10)) &&
          Date.parse(dateOut) >= Date.parse(item.createdAt.slice(0, 10))
        ) {
          return item;
        } else {
          console.log(
            item.createdAt.slice(0, 10),
            Date.parse(dateIn) <= Date.parse(item.createdAt.slice(0, 10)),
            Date.parse(dateOut) >= Date.parse(item.createdAt.slice(0, 10))
          );
        }
      });
      setGetData(x);
      console.log(x);
      if (getdata.length > 0) {
        let total = 0;
        getdata.forEach((item) => {
          total += item.total;
        });
      }
    };

    getStatistic();
  }, [data, dateIn, dateOut]);
  // co

  function filterOrder() {
    return getdata.map((i, index) => (
      <TableRow key={index}>
        <TableCell className="tableCell" size="small">
          {i._id}
        </TableCell>
        <TableCell className="tableCell">
          {i.products.map((item, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              {item.name}
            </li>
          ))}
        </TableCell>
        <TableCell className="tableCell">{i.shipping.name}</TableCell>
        <TableCell className="tableCell">
          {moment(i.createdAt).locale("vi", vi).format("dddd, LLL")}
        </TableCell>
        <TableCell className="tableCell">
          {i.products.map((a) => (
            <li key={a} style={{ listStyle: "none" }}>
              {a.quantity}
            </li>
          ))}
        </TableCell>
        <TableCell className="tableCell">{i.total}</TableCell>
        <TableCell className="tableCell">
          {i.payment_method === 1 ? (
            <FaCcStripe
              style={{
                fontSize: "35px",
                color: "blue",
              }}
            />
          ) : (
            <FaRegMoneyBillAlt
              style={{
                fontSize: "35px",
                color: "green",
              }}
            />
          )}
        </TableCell>
        <TableCell className="tableCell">{i.payment_status}</TableCell>
      </TableRow>
    ));
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <p style={{ color: "black" }}>Thống kê doanh thu</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="lblcheckIn">
          <label className="lblColor" style={{ marginRight: "10px" }}>
            Từ ngày
          </label>
          <input
            id="typeofRoom"
            type="date"
            value={dateIn}
            onChange={(e) => setDateIn(e.target.value)}
            className="roomInput1"
          />
        </div>
        <div className="lblcheckOut">
          <label
            className="lblColor"
            style={{ marginRight: "10px" }}
            htmlFor="typeofRoom"
          >
            Đến Ngày
          </label>
          <input
            id="typeofRoom"
            type="date"
            value={dateOut}
            onChange={(e) => setDateOut(e.target.value)}
            className="roomInput1"
          />
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 850 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Mã đơn hàng</TableCell>
                <TableCell className="tableCell">Sản phẩm</TableCell>
                <TableCell className="tableCell">Khách hàng</TableCell>
                <TableCell className="tableCell">Ngày mua</TableCell>
                <TableCell className="tableCell">Số lượng</TableCell>
                <TableCell className="tableCell">Tổng tiền</TableCell>
                <TableCell className="tableCell">Phương thức</TableCell>
                <TableCell className="tableCell">Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{filterOrder()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
