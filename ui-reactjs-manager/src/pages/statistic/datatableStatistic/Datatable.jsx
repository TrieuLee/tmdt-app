import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Datatable() {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [getdata, setGetData] = useState({});
  const header = JSON.parse(localStorage.getItem("user")).accessToken;

  const { data, loading, error } = useFetch(`${domain}/api/orders/${header}`); 
  // con
  function getStatistic() {
    let sortOrder = [...data];
    const x = sortOrder.filter(
      (item) =>
        item.payment_status === "Đã thanh toán" &&
        Date.parse(dateIn) <= Date.parse(item.createdAt) &&
        Date.parse(dateOut) >= Date.parse(item.createdAt)
    );
    setGetData(x);
    console.log(getdata);
    if (sortOrder.length > 0) {
      let total = 0;
      sortOrder.forEach((item) => {
        total += item.total;
      });
      console.log(total);
    }
  }

  function filterOrder() {
    const getOrder = getdata.map((item, i) => (
      <TableRow>
        <TableCell className="tableCell">{item.total}</TableCell>
        <TableCell className="tableCell">{item.products}</TableCell>
        <TableCell className="tableCell"></TableCell>
        <TableCell className="tableCell"></TableCell>
        <TableCell className="tableCell"></TableCell>
        <TableCell className="tableCell"></TableCell>
        <TableCell className="tableCell"></TableCell>
      </TableRow>
    ));

    return getOrder;
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <p style={{ color: "black" }}>Thống kê doanh thu</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="lblcheckIn">
          <label
            className="lblColor"
            style={{ marginRight: "10px" }}
          >
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
          <label
            className="lblColor"
            style={{
              marginLeft: "50px",
              background: "rgb(205, 166, 85)",
              padding: "5px",
              cursor: "pointer",
            }}
            // onClick={getRooms}
          >
            Thống kê
          </label>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Mã đơn hàng</TableCell>
                <TableCell className="tableCell">Sản phẩm</TableCell>
                <TableCell className="tableCell">Khách hàng</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getStatistic.length > 0 ? (
                <>
                  {filterOrder()}
                  console.log(filterOrder())
                  Tổng doanh thu :
                </>
              ) : (
                <h3>Không có dữ liệu</h3>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
