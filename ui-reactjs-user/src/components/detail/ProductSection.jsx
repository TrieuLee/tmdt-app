import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Records from "../../server.json";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./test.css";
export default function ProductSection(props) {
  const { id, itemID } = useParams();
  const { cartItems } = props;
  const { onAdd } = props;
  const [active, setActive] = useState();
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

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href={id}>
      Trang chủ
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      {id}
    </Link>,
    <Link key="3" href={itemID} color="text.primary">
      {itemID}
    </Link>,
  ];

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

  // Chon size
  const [size, setSize] = useState("");
  const handleClick = (product) => {
    onAdd({ ...cartItems, ...product, size });
  };
  console.log(size);

  // function Add(items) {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }

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
            {Records &&
              Records.filter((item) => item.id == itemID).map((item, i) => (
                <React.Fragment key={i}>
                  <Grid item xs={6}>
                    <Box
                      component="img"
                      sx={{ height: 480, width: 480 }}
                      src={item.images}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      id="modal-modal-title"
                      variant="h4"
                      component="h6"
                    >
                      {item.title}
                    </Typography>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      <p style={{ margin: "0" }}> {item.rate} </p>
                      <div>
                        {item.icon &&
                          item.icon.map((records, i) => (
                            <FontAwesomeIcon
                              icon={
                                require("@fortawesome/free-solid-svg-icons")[
                                  records
                                ]
                              }
                              color="orange"
                            />
                          ))}
                      </div>
                      <p style={{ margin: "0", marginLeft: "20px" }}>
                        Đã bán: {item.sold}
                      </p>
                      <p style={{ margin: "0", marginLeft: "20px" }}>
                        Tình trạng:{" "}
                        <span style={{ color: "green", fontWeight: "bold" }}>
                          {item.status}
                        </span>
                      </p>
                    </div>
                    <Typography
                      id="modal-modal-title"
                      variant="h4"
                      component="h6"
                      style={{ marginTop: "10px" }}
                    >
                      {item.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </Typography>
                    <div>
                      {item.service &&
                        item.service.map((records, i) => (
                          <p key={i}>{records}</p>
                        ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>Size giày:</div>

                      <select onChange={(e) => setSize(e.target.value)}>
                        {item.size &&
                          item.size.map((record) => (
                            <option
                              key={record}
                              style={{
                                border: "1px solid black",
                                padding: "8px",
                                marginLeft: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setActive(record);
                              }}
                              className={
                                active === record ? "active" : undefined
                              }
                            >
                              {record}
                            </option>
                          ))}
                      </select>
                    </div>

                    <Stack direction="row" spacing={2} sx={theme.spacing}>
                      <Button
                        sx={theme.bread}
                        onClick={() => {
                          if (item.size) {
                            alertClick();
                            handleClick(item);
                            console.log(item.size);
                          }
                        }}
                      >
                        <AddShoppingCartIcon sx={theme.AddShoppingCartIcon} />
                        <p style={{ margin: "8px" }}>
                          Thêm vào giỏ hàng ({cartItems.length})
                        </p>
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
                      <Link
                        to="/checkout"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Button
                          onClick={() => {
                            // Add(item);
                          }}
                          variant="contained"
                          startIcon={<ShoppingBagIcon />}
                        >
                          <p style={{ margin: "8px" }}>MUA NGAY</p>{" "}
                        </Button>
                      </Link>
                    </Stack>
                  </Grid>
                </React.Fragment>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
