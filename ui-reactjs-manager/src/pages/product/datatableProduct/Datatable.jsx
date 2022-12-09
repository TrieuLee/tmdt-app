import React, { useState, useEffect } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../components/hooks/useFetch";
import domain from "../../../utils/domain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        await axios.delete(`${domain}/api/products/${id}/${header}`);
        setList(list.filter((item) => item._id !== id));
        navigate("/products")
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userColumns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={`${domain}/images/${params.row.img}`}
              alt=""
              crossorigin="anonymous"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "brand",
      headerName: "Hãng",
      width: 80,
    },

    {
      field: "price",
      ...usdPrice,
      headerName: "Giá tiền",
      width: 90,
    },
    {
      field: "size",
      headerName: "Size",
      width: 150,
    },

    {
      field: "state",
      headerName: "Tình trạng",
      width: 130,
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
      width: 150,
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
        Danh mục sản phẩm
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
