import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../server.json";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function ProductSection() {
  const { id, itemID } = useParams();

  if (itemID) {
    Records.find((item) => item.id === itemID);
  }
  // console.log(Records)
  // console.log(typeof itemID);
  const theme = {
    spacing: {
      marginTop: "20px",
    },
  };
  return (
    <Container>
      <div>{itemID}</div>
      <Grid container border={1} spacing={2}>
        {Records.filter((item) => item.id == itemID).map((item) => (
          <>
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

              <div style={{ display: "flex" }}>
                {item.size &&
                  item.size.map((record) => (
                    <p style={{ border: "1px solid black" }}>{record}</p>
                  ))}
              </div>

              <Typography id="modal-modal-title" variant="h4" component="h6">
                {item.description}
              </Typography>

              <Stack direction="row" spacing={2} sx={theme.spacing}>
                <Button variant="outlined">
                  <IconButton>
                    <AddShoppingCartIcon />
                  </IconButton>
                  Thêm vào giỏ hàng
                </Button>
                <Button variant="contained">Mua ngay</Button>
              </Stack>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
}
