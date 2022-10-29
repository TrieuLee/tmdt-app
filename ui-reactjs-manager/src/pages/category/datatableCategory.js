export const userColumns = [
  {
    field: "user",
    headerName: "Tên loại sản phẩm",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  {
    field: "category",
    headerName: "Hãng",
    width: 180,
  },
  {
    field: "logp",
    headerName: "Logo",
    width: 180,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Air Force 1",
    category: "Air Force",
    logp: "",
  },
  {
    id: 2,
    username: "Jordan",
    category: "Jordan",
    logp: "",
  },
];
