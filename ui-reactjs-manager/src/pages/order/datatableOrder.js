export const userColumns = [
  {
    field: "user",
    headerName: "Mã đơn hàng",
    width: 140,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Air Force 1",
    category: "Air Force",
  },
  {
    id: 2,
    username: "Jordan",
    category: "Jordan",
  },
];
