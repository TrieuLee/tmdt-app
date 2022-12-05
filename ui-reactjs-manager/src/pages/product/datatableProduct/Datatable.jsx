import React, { useState, useEffect } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import axios from "axios";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const usdPrice = {
  type: "number",
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(value),
  cellClassName: "font-tabular-nums",
};
export default function Datatable() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch(`${domain}/api/${path}`);
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    const answer = window.confirm("Bạn có chắc chắn xóa sản phẩm?");
    if (answer) {
      try {
        await axios.delete(`${domain}/api/${path}/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Tên sản phẩm",
      width: 230,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.name}</div>;
      },
    },
    {
      field: "brand",
      headerName: "Hãng",
      width: 180,
    },

    {
      field: "price",
      ...usdPrice,
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
      renderCell: (params) => {
        if (params.row.state === true) {
          return (
            <div style={{ color: "green", fontWeight: "bold" }}>Còn hàng</div>
          );
        }
        return <div style={{ color: "red", fontWeight: "bold" }}>Tạm hết</div>;
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
              to={`/${path}/${params.row._id}`}
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
        getRowId={(row) => row._id}
      />
    </div>
  );
}
