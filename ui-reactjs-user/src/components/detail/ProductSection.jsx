import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
// import Records from "../../server.json";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import domain from "../../utils/domain";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { addProduct } from "../../context/CartReducer";
import { useDispatch } from "react-redux";

const theme = {
  spacing: {
    marginTop: "30px",
  },
  tr: {
    background: "black",
    color: "#fff",
    "&:hover": {
      background: "white",
      border: "1px solid black",
      shadow: "none",
      color: "black",
    },
  },
  bread: {
    background: "black",
    color: "white",
    "&:hover": {
      border: "1px solid black",
      backgroud: "white",
      color: "black",
    },
  },
};

export default function ProductSection(props) {
  const location = useLocation();
  const idP = location.pathname.split("/")[2];
  const { id, itemID } = useParams();
  const [products, setProducts] = useState({});
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const alertClick = () => {
    setOpen(true);
  };
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    if (!size) {
      window.alert("Vui lòng chọn size giày");
    } else {
      dispatch(addProduct({ ...products, quantity, size }));
      alertClick();
    }
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${domain}/api/products/find/` + idP);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [idP]);

  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      to="/"
      style={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <HomeIcon sx={{ mr: 0.75 }} fontSize="inherit" />
      Trang chủ
    </Link>,
    <Link
      key="2"
      style={{ color: "black", textDecoration: "none" }}
      to={`/${id}`}
    >
      {id}
    </Link>,
    <Link
      key="3"
      href={itemID}
      style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}
    >
      {products.name}
    </Link>,
  ];

  return (
    <>
      <Container>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Box>
          <Grid container spacing={2} sx={{ mt: 1 }} columns={12}>
            <Grid item xs={6}>
              <Box
                component="img"
                sx={{ height: 480, width: 480 }}
                src={`${domain}/images/${products.img}`}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography id="modal-modal-title" variant="h4" component="h6">
                {products.name}
              </Typography>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <p style={{ margin: "0" }}>
                  Tình trạng: {""}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {products.state === true ? "Còn hàng" : "Hết hàng"}
                  </span>
                </p>
              </div>
              <Typography
                variant="h4"
                component="h6"
                style={{ marginTop: "10px" }}
              >
                $ {products.price}
              </Typography>
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ marginRight: "10px" }}>Số lượng:</p>
                  <RemoveCircleTwoToneIcon
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  />
                  <div
                    style={{
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  >
                    {quantity}
                  </div>
                  <AddCircleTwoToneIcon
                    onClick={() => setQuantity((prev) => prev + 1)}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "10px" }}>Size giày:</p>
                {/* <select onChange={(e) => setSize(e.target.value)}>
                  <option value="">Chọn size</option>
                  {products.size &&
                    products.size.map((record) => (
                      <option key={record}>{record}</option>
                    ))}
                </select> */}
                <FormControl sx={{ width: 100 }} size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={size}
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <MenuItem value="">-Size-</MenuItem>
                    {products.size &&
                      products.size.map((record) => (
                        <MenuItem key={record} value={record}>
                          {record}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>

              <Stack direction="row" spacing={2} sx={theme.spacing}>
                <Button
                  sx={theme.bread}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <AddShoppingCartIcon sx={theme.AddShoppingCartIcon} />
                  <p style={{ margin: "8px" }}>Thêm vào giỏ hàng</p>
                </Button>

                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={alertClose}
                >
                  <Alert
                    onClose={alertClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Thêm vào giỏ hàng thành công
                  </Alert>
                </Snackbar>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
