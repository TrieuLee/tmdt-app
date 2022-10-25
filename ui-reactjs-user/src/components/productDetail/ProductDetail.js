import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../server.json";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ProductDetail() {
  const { id, itemID } = useParams();
  if (itemID) {
    Records.find((item) => item.id === itemID);
  }
  // console.log(Records)
  // console.log(typeof itemID);
  return (
    <>
      <Navbar />

      <Container>
        <div>{itemID}</div>

        {/* {Records.filter((item) => item.id == itemID).map((item) => (
            <div key={item.id}>
              <div>Day la hinh {item.title}</div>
            </div>
          ))} */}

        <Grid container border={1} spacing={2}>
          {Records.filter((item) => item.id == itemID).map((item) => (
            <>
              <Grid item xs={6} border={1}>
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

                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Thêm vào giỏ hàng</Button>
                  <Button variant="contained">Mua ngay</Button>
                </Stack>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
