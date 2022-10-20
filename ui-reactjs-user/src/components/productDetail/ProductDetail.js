import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../server.json";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/Navbar";

export default function ProductDetail() {
  const { id, itemID } = useParams();
  if (itemID) {
    Records.find((item) => item.id === itemID);
  }

  console.log(typeof itemID);
  return (
    <>
      <Navbar />

      <Container>

        <div>{itemID}</div>

        {Records.filter((item) => item.id == itemID).map((item) => (
          <div key={item.id}>
            <div>Day la hinh {item.title}</div>
          </div>
        ))}

        <Grid container border={1} spacing={2}>
          {Records.filter((item) => item.id == itemID).map((item) => (
            <>
              <Grid item xs={6} border={1}>
                <Box component="img"
                  sx={{ height: 480, width: 480 }}
                  src={item.images}
                />

              </Grid>
              <Grid item xs={6}>
                <div>{item.title}</div>
              </Grid>
            </>

          ))}
        </Grid>
      </Container>





    </>

  );
}
