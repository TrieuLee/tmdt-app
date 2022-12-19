import React, { useContext, useEffect, useState } from "react";
import "./UserProfile.scss";
import axios from "axios";
import moment from "moment";
import vi from "moment/locale/vi";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FaCcStripe } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../../context/AuthContext";
import { styled } from "@mui/material/styles";
import domain from "../../utils/domain";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-renderingZone": {
    maxHeight: "none !important",
  },
  "& .MuiDataGrid-cell": {
    lineHeight: "unset !important",
    maxHeight: "none !important",
    whiteSpace: "normal",
    minWidth: "none !important",
  },
  "& .MuiDataGrid-row": {
    maxHeight: "none !important",
  },
}));
export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const idUser = user.user._id ? user.user._id : "";
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [deliveryStatus, setDeliveryStatus] = useState("Hủy đơn hàng");

  useEffect(() => {
    const header = JSON.parse(localStorage.getItem("user")).accessToken;
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${domain}/api/orders/findByUser/${idUser}/${header}`
        );
        setOrders(res.data);
        localStorage.setItem("userOrder", JSON.stringify(res.data));
      } catch (err) {}
    };
    getOrders();
  }, [idUser]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e);
    // const answer = window.confirm("Bạn có chắc chắn hủy đơn hàng?");
    // if (answer) {
    //   const order = {
    //     delivery_status: deliveryStatus ? deliveryStatus : undefined,
    //   };
    //   try {
    //     const header = JSON.parse(localStorage.getItem("user")).accessToken;
    //     const id = JSON.parse(localStorage.getItem("userOrder"))._id;
    //     await axios.put(`${domain}/api/orders/${id}/${header}`, order);
    //   } catch (e) {}
    // }
  };

  const size1Map = orders.map((item) =>
    item.products.map((product, i) => product?.quantity)
  );

  const columns = [
    // { field: "_id", headerName: "Mã đơn hàng", width: 120 },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 150,
      renderCell: (params) => (
        <ul style={{ listStyle: "none", padding: "0px" }}>
          {params.value.map((role, index) => (
            <li key={role.name}>{role.name}</li>
          ))}
        </ul>
      ),
      type: "string",
    },

    {
      field: size1Map.toString(),
      headerName: "Số lượng",
      width: 90,
      valueGetter: (params) => params.row.products.map((item) => item.quantity),
      type: "string",
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 100,
    },

    {
      field: "delivery_status",
      headerName: "Tình trạng",
      width: 100,
    },
    {
      field: "payment_method",
      headerName: "Phương thức",
      width: 100,
      renderCell: (params) => {
        if (params.row.payment_method !== 0) {
          return (
            <FaCcStripe
              style={{
                fontSize: "35px",
                color: "blue",
              }}
            />
          );
        } else {
          return (
            <FaRegMoneyBillAlt
              style={{
                fontSize: "35px",
                color: "green",
              }}
            />
          );
        }
      },
    },
    {
      field: "payment_status",
      headerName: "Thanhtoán",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Ngày mua",
      width: 100,
      valueGetter: (params) =>
        moment(params.value).locale("vi", vi).format("L"),
    },
    {
      field: "_id",
      headerName: "Thao tác",
      width: 100,
      renderCell: (params) => {
        console.log(params)
        return(
          <button onClick={handleClick}>Huy don hang</button>
        )
      },
    },
  ];
  const history = [
    { field: "_id", headerName: "Mã đơn hàng", width: 230 },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 200,
      align: "left",

      renderCell: (params) => (
        <ul style={{ listStyle: "none", padding: "0px" }}>
          {params.value.map((role, index) => (
            <li key={role.name}>{role.name}</li>
          ))}
        </ul>
      ),
      type: "string",
    },
    {
      field: size1Map.toString(),
      headerName: "Số lượng",
      width: 90,
      valueGetter: (params) => params.row.products.map((item) => item.quantity),
      type: "string",
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 100,
    },

    {
      field: "delivery_status",
      headerName: "Tình trạng ",
      width: 100,
    },
    {
      field: "payment_method",
      headerName: "Phương thức ",
      width: 100,
      renderCell: (params) => {
        if (params.row.payment_method !== 0) {
          return (
            <FaCcStripe
              style={{
                fontSize: "35px",
                color: "blue",
              }}
            />
          );
        } else {
          return (
            <FaRegMoneyBillAlt
              style={{
                fontSize: "35px",
                color: "green",
              }}
            />
          );
        }
      },
    },
    {
      field: "payment_status",
      headerName: "Thanh toán",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Ngày mua",
      width: 160,
      valueGetter: (params) =>
        moment(params.value).locale("vi", vi).format("dddd, LLL"),
    },
  ];

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
              <StyledDataGrid
                rows={orders}
                columns={columns}
                initialState={{
                  filter: {
                    filterModel: {
                      items: [
                        {
                          columnField: "payment_status",
                          operatorValue: "contains",
                          value: "Chưa thanh toán",
                        },
                        {
                          columnField: "delivery_status",
                          operatorValue: "contains",
                          value: "Đã nhận đơn hàng",
                        },
                        {
                          columnField: "delivery_status",
                          operatorValue: "contains",
                          value: "Hủy đơn hàng",
                        },
                      ],
                    },
                  },
                }}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowHeight={() => "auto"}
                getRowId={(rows) => rows._id}
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
                  Thành viên: 
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
            rows={orders}
            columns={history}
            pageSize={5}
            getRowHeight={() => "auto"}
            rowsPerPageOptions={[5]}
            getRowId={(rows) => rows._id}
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: "delivery_status",
                      operatorValue: "contains",
                      value: "Hoàn thành",
                    },
                  ],
                },
              },
            }}
          />
        </Box>
      </Container>
    </>
  );
}
