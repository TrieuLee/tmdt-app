import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";

export default function Datatable() {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const header = JSON.parse(localStorage.getItem("user")).accessToken;

  const { data, loading, error } = useFetch(`${domain}/api/orders/${header}`);
  console.log(data);
  return (
    <div className="datatable">
      <div className="datatableTitle">Thống kê doanh thu</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Từ ngày"
            value={dateIn}
            onChange={(newValue) => {
              setDateIn(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Đến ngày"
            value={dateOut}
            onChange={(newValue) => {
              setDateOut(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button variant="contained">Thống kê</Button>
      </div>
    </div>
  );
}
