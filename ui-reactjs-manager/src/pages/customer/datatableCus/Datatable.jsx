import React, { useState, useContext, useEffect } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows } from "../../customer/datatableCus";
import { Link ,useLocation} from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import axios from "axios";

export default function Datatable() {
  const [list,setList] = useState("");
  const { data, loading, error } = useFetch(`${domain}/api/auth`);
  useEffect(() => {
    setList(data);
  }, [data]);

  console.log(data);
  
  const handleDelete = async (id) => {
    const answer = window.confirm("Bạn có chắc chắn xóa người dùng này?");
    if (answer) {
      try {
        await axios.delete(`${domain}/api/users/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Tên người dùng",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },

    {
      field: "address",
      headerName: "Địa chỉ",
      width: 200,
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "role",
      headerName: "Phân quyền",
      width: 100,
      renderCell: (params) => {
        if (params.row.role === 1) {
          return <div style={{ color: "red", fontWeight: "bold" }}>Admin</div>;
        } else if (params.row.role === 2) {
          return (
            <div style={{ color: "green", fontWeight: "bold" }}>Nhân viên</div>
          );
        } else {
          return (
            <div style={{ color: "orange", fontWeight: "bold" }}>
              Khách hàng
            </div>
          );
        }
      },
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
            <Link
              to={`/users/${params.row._id}`}
              // to ="/users/view"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Xóa
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
        getRowId={(row) => row._id}
      />
    </div>
  );
}
