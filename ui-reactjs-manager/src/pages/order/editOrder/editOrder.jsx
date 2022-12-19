import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./Edit.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import domain from "../../../utils/domain";
import { useNavigate } from "react-router-dom";
export default function EditProduct({ title }) {
  // Hãng
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("");

  const navigate = useNavigate();

  const setData = () => {
    setName(JSON.parse(localStorage.getItem("editOrder")).shipping.name);
    setAddress(
      JSON.parse(localStorage.getItem("editOrder")).payment_method === 0
        ? JSON.parse(localStorage.getItem("editOrder")).shipping.address
        : JSON.parse(localStorage.getItem("editOrder")).shipping.address.line1 +
            ", " +
            JSON.parse(localStorage.getItem("editOrder")).shipping.address
              .city +
            "," +
            JSON.parse(localStorage.getItem("editOrder")).shipping.address
              .country
    );
    setEmail(JSON.parse(localStorage.getItem("editOrder")).shipping.email);
    setPhone(JSON.parse(localStorage.getItem("editOrder")).shipping.phone);
    setDeliveryStatus(
      JSON.parse(localStorage.getItem("editOrder")).delivery_status
    );
    setPaymentStatus(
      JSON.parse(localStorage.getItem("editOrder")).payment_status
    );
    setPaymentMethod(
      JSON.parse(localStorage.getItem("editOrder")).payment_method
    );
  };
  useEffect(() => {
    if (localStorage.getItem("editOrder")) {
      setData();
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const order = {
      shipping: {
        name: name ? name : undefined,
        address: address ? address : undefined,
        phone: phone ? phone : undefined,
        email: email ? email : undefined,
      },
      payment_method: paymentMethod ? paymentMethod : undefined,
      delivery_status: deliveryStatus ? deliveryStatus : undefined,
      payment_status: paymentStatus ? paymentStatus : undefined,
    };

    try {
      const header = JSON.parse(localStorage.getItem("user")).accessToken;
      const id = JSON.parse(localStorage.getItem("editOrder"))._id;
      await axios.put(`${domain}/api/orders/${id}/${header}`, order);
      navigate("/orders");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              autoComplete="off"
              onSubmit={handleClick}
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin Đơn hàng
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    label="Người nhận hàng"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Địa chỉ nhận"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Tình trạng Đơn hàng
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={deliveryStatus}
                      label="Tình trạng Đơn hàng"
                      onChange={(e) => setDeliveryStatus(e.target.value)}
                    >
                      <MenuItem value={"Đã nhận đơn hàng"}>
                        Đã nhận đơn hàng
                      </MenuItem>
                      <MenuItem value={"Đang vận chuyển"}>
                        Đang vận chuyển
                      </MenuItem>
                      <MenuItem value={"Hoàn thành"}>Hoàn thành</MenuItem>
                      <MenuItem value={"Hủy đơn hàng"}>Hủy đơn hàng</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Phương thức thanh toán
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={paymentMethod}
                      label="Phương thức thanh toán"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <MenuItem value={1}>Chuyển khoản qua Banking</MenuItem>
                      <MenuItem value={0}>Trực tiếp</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Tình trạng thanh toán
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={paymentStatus}
                      label="Tình trạng thanh toán"
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                      <MenuItem value={"Đã thanh toán"}>Đã thanh toán</MenuItem>
                      <MenuItem value={"Chưa thanh toán"}>
                        Chưa thanh toán
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained">Đặt lại</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
