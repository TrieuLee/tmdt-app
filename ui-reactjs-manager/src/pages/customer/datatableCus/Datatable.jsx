import React, { useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../customer/datatableCus";
import { Link } from "react-router-dom";

export default function Datatable() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const userColumns = [
    {
      field: "user",
      headerName: "Tên khách hàng",
      width: 230,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.username}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "phoneNumber",
      headerName: "Số điện thoại",
      width: 200,
    },
    {
      field: "point",
      headerName: "Điểm thưởng",
      width: 150,
    },
    {
      field: "member",
      headerName: "Thành viên",
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
      <div className="datatableTitle">
        Danh sách khách hàng
        <Link to="/users/new" className="link">
          Thêm khách hàng
        </Link>
      </div>
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
