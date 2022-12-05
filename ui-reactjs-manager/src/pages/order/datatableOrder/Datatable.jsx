import React, { useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../order/datatableOrder";
import { Link } from "react-router-dom";

export default function Datatable() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
      field: "category",
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
      field: "payment",
      headerName: "Thanh toán",
      width: 160,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 100,
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
      />
    </div>
  );
}
