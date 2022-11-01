import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Record from "../../server.json";
export default function OrderGrid() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
            className="registerBox"
          >
            <Typography variant="h6" component="p">
              Thông tin giao hàng
            </Typography>

            <TextField required id="outlined-required" label="Tên khách hàng" />
            <TextField required id="outlined-required" label="Số điện thoại" />
            <TextField
              required
              id="outlined-required"
              label="Địa chỉ nhận hàng"
            />
            <TextField required id="outlined-required" label="Email" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" square>
              
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
