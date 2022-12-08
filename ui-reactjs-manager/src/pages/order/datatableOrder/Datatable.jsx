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

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const shipping = data.map((item) => item.shipping.name);
  console.log(shipping);
  const userColumns = [
    {
      field: "_id",
      headerName: "Mã đơn hàng",
      width: 140,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row._id}</div>;
      },
    },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 200,
      renderCell: (params) => (
        <ul style={{ listStyle: "none" }}>
          {params.value.map((role, index) => (
            <li key={index}>{role.name}</li>
          ))}
        </ul>
      ),
      type: "string",
    },
    {
      field: shipping.toString(),
      headerName: "Khách hàng",
      width: 100,
      valueGetter: (params) => params.row?.shipping?.name,
      type: "string",
    },
    {
      field: "createdAt",
      headerName: "Ngày mua",
      width: 160,
      valueGetter: (params) =>
        moment(params.value).locale("vi", vi).format("dddd, LLL"),
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      width: 120,
    },
    {
      field: "payment_status",
      headerName: "Thanh toán",
      width: 160,
    },
    {
      field: "delivery_status",
      headerName: "Trạng thái",
      width: 100,
      editable: true,

      valueOptions: ["Đã nhận đơn hàng", "Đang giao", "Hoàn thành"],
      type: "singleSelect",
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
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Danh mục đơn hàng</div>
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
