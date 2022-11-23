export const userColumns = [
  {
    field: "user",
    headerName: "Tên sản phẩm",
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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Giay Air Force ",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 2,
    username: "Air Force 2",
    category: "Air Force",
    price: 450000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 3,
    username: "Air Force 3",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 4,
    username: "Air Force 1 All White",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 5,
    username: "Air Force Tear Red",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 6,
    username: "Air Force 1 Dragon 2.0",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 7,
    username: "Air Force Cream Black",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 8,
    username: "Air Force Luis Votton",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 9,
    username: "Air Force Low Brown",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
  {
    id: 10,
    username: "Air Force Guici Cream",
    category: "Air Force",
    price: 400000,
    size: [38, 39, 40],
    color: "red",
    state: "Còn hàng",
  },
];
