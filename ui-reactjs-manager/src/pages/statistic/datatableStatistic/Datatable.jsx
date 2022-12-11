import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { vi } from "date-fns/locale";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());
  const header = JSON.parse(localStorage.getItem("user")).accessToken;

  const { data, loading, error } = useFetch(`${domain}/api/orders/${header}`);
  let sortOrder = [...data];
  sortOrder.filter((item) => item.payment_status);
  console.log(sortOrder);

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
            htmlFor="typeofRoom"
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
              <TableRow>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
                <TableCell className="tableCell"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
