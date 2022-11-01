import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./test.css";
export default function ProductSection() {
  const { id, itemID } = useParams();
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
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/:id">
      {id}
    </Link>,
    <Link key="3" href="/:id/:itemID" color="text.primary">
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

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Container>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {Records.filter((item) => item.id == itemID).map((item) => (
            <>
              <div></div>
              <Grid item xs={6}>
                <Box
                  component="img"
                  sx={{ height: 480, width: 480 }}
                  src={item.images}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-title" variant="h4" component="h6">
                  {item.title}
                </Typography>
                <Typography id="modal-modal-title" variant="h4" component="h6">
                  {item.price}
                </Typography>
                <div>
                  {item.service &&
                    item.service.map((records, i) => <p key={i}>{records}</p>)}
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>Size giày:</div>

                  {item.size &&
                    item.size.map((record) => (
                      <>
                        <span
                          style={{
                            border: "1px solid black",
                            padding: "8px",
                            marginLeft: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setActive(record);
                            console.log(setActive(record));
                          }}
                          className={active === record ? "active" : undefined}
                        >
                          {record}
                        </span>
                      </>
                    ))}
                </div>

                <Stack direction="row" spacing={2} sx={theme.spacing}>
                  <Button
                    sx={theme.bread}
                    onClick={() => {
                      alertClick();
                      onAdd(item);
                      console.log(onAdd(item));
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

                  <Button variant="contained" startIcon={<ShoppingBagIcon />}>
                    Mua ngay
                  </Button>
                </Stack>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
