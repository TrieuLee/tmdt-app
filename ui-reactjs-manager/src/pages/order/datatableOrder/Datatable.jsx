import React, { useState, useEffect } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows } from "../../order/datatableOrder";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import { styled } from "@mui/material/styles";
import moment from "moment";
import vi from "moment/locale/vi";
import { FaCcStripe } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
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
  "& .MuiDataGridCell": {
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default function Datatable() {
  const header = JSON.parse(localStorage.getItem("user")).accessToken;
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [list, setList] = useState("");
  const { data, loading, error } = useFetch(`${domain}/api/${path}/${header}`);
  useEffect(() => {
    setList(data);
  }, [data]);

  const shipping = data.map((item) => item.shipping.name);
  const userColumns = [
    // {
    //   field: "_id",
    //   headerName: "Mã đơn hàng",
    //   width: 140,
    //   renderCell: (params) => {
    //     return <div className="cellWithImg">{params.row._id}</div>;
    //   },
    // },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 160,
      renderCell: (params) => (
        <div style={{ listStyleType: "none" }}>
          {params.value.map((role, index) => (
            <li key={index}>{role.name}</li>
          ))}
        </div>
      ),
      type: "string",
      headerAlign: "center",
    },
    {
      field: shipping.toString(),
      headerName: "Khách hàng",
      width: 100,
      valueGetter: (params) => params.row?.shipping?.name,
      type: "string",
      headerAlign: "center",
    },
    // {
    //   field: "createdAt",
    //   headerName: "Ngày mua",
    //   width: 160,
    //   headerAlign: "center",
    //   valueGetter: (params) =>
    //     moment(params.value).locale("vi", vi).format("dddd, LLL"),
    // },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 80,
      headerAlign: "center",
      align: "right",
    },
    {
      field: "payment_status",
      headerName: "Thanh toán",
      width: 160,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "delivery_status",
      headerName: "Trạng thái",
      width: 200,
      editable: true,
      headerAlign: "center",
      align: "center",
      type: "singleSelect",
    },

    {
      field: "payment_method",
      headerName: "Phương thức ",
      width: 100,
      headerAlign: "center",
      align: "center",
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
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${path}/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {" "}
        <p style={{ color: "black" }}>Danh mục đơn hàng</p>
      </div>
      <StyledDataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        // onSelectionChange={(newSelection) => {
        //   setSelection(newSelection.rows);
        // }}
      />
    </div>
  );
}
