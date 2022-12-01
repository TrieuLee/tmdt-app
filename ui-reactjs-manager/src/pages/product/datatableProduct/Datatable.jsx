import React, { useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";

export default function Datatable() {
  const { data, loading, error } = useFetch(
    "https://huflit-sneaker-api.up.railway.app/api/products"
  );

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };
   const userColumns = [
    {field: '_id',headerName:"ID", width:70},
    {
      field: "product",
      headerName: "Tên sản phẩm",
      width: 230,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.title}</div>;
      },
    },
    {
      field: "category",
      headerName: "Hãng",
      width: 180,
    },
  
    {
      field: "price",
      headerName: "Giá tiền",
      width: 160,
    },
    {
      field: "size",
      headerName: "Size",
      width: 150,
    },
  
    {
      field: "state",
      headerName: "Tình trạng",
      width: 160,
    },
  ];
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/view" style={{ textDecoration: "none" }}>
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
      <div className="datatableTitle">
        Danh sách sản phẩm
        <Link to="/products/new" className="link">
          Thêm sản phẩm
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}

      />
    </div>
  );
}
