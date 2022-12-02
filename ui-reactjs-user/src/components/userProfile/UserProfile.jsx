import React, { useContext, useEffect, useState} from "react";
import "./UserProfile.scss";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../../context/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    const getOrders = async()=>{
      try{
        const res = await axios.get(

        )
      }catch{

      }
    }
  })
  const columns = [
    { field: "id", headerName: "STT", width: 90 },
    {
      field: "title",
      headerName: "Tên sản phẩm",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Giá tiền",
      width: 150,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      type: "number",
      width: 90,
      editable: true,
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 120,
      editable: true,
    },
    {
      field: "payment",
      headerName: "Thanh toán",
      width: 100,
      editable: true,
    },
    {
      field: "status",
      headerName: "Thanh toán",
      width: 100,
      editable: true,
    },
  ];
  const columns1 = [
    { field: "id", headerName: "STT", width: 90 },
    {
      field: "title",
      headerName: "Tên sản phẩm",
      width: 180,
      editable: true,
    },
    {
      field: "price",
      headerName: "Giá tiền",
      width: 150,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      width: 120,
      editable: true,
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 160,
      editable: true,
    },
    {
      field: "payment",
      headerName: "Thanh toán",
      width: 180,
      editable: true,
    },
    {
      field: "reward",
      headerName: "Điểm tích lũy",
      width: 200,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      title: "Giay Airforce",
      price: 500000,
      quantity: 1,
      total: 500000,
      payment: "Tiền mặt",
      status: "Đang giao hàng",
    },
  ];
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="profileCover">
        <img className="profileCoverImg" src={PF + "img/5482397.jpg"} alt="" />
        <img className="profileUserImg" src={PF + "img/noAvatar.png"} alt="" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">{user.user.username}</h4>
      </div>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={{ mb: 1 }} variant="h6" component="div">
              Theo dõi đơn hàng
            </Typography>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275, mt: 5 }}>
              <CardContent>
                <Typography sx={{ mb: 1 }} variant="h6" component="div">
                  Thông tin khách hàng
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Tên khách hàng: {user.user.username}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Địa chỉ: {user.user.address}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Số điện thoại: {user.user.phone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Điểm thưởng: {user.user.reward}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Thành viên: Thường
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ height: 400, width: "100%" }}>
          <Typography sx={{ mt: 5, mb: 2 }} variant="h6" component="div">
            Lịch sử mua hàng
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns1}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Container>
    </>
  );
}
