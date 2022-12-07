import React, { useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows } from "../../order/datatableOrder";
import { Link } from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";

export default function Datatable() {
  const { data, loading, error } = useFetch(`${domain}/api/orders`);
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };
  console.log(data);
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
      field: "product",
      headerName: "Sản phẩm",
      width: 180,
    },
    {
      field: "shipping",
      headerName: "Khách hàng",
      width: 180,
    },
    {
      field: "date",
      headerName: "Ngày mua",
      width: 150,
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
      valueOptions: ["United Kingdom", "Spain", "Brazil"],
      type: "singleSelect",
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
      <div className="datatableTitle">Danh sách đơn hàng</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
