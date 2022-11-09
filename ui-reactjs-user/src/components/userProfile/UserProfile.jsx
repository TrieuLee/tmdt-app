import React from "react";
import "./UserProfile.scss";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";

export default function UserProfile() {
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
      width: 160,
      editable: true,
    },
    {
      field: "payment",
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
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  ];
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="profileCover">
        <img className="profileCoverImg" src={PF + "img/5482397.jpg"} alt="" />
        <img className="profileUserImg" src={PF + "img/noAvatar.png"} alt="" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Thiên Phúc</h4>
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
                  Tên khách hàng: Thiên Phúc
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Địa chỉ: Hồ Chí Minh
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Số điện thoại: 0783467852
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Điểm thưởng: 1000
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
