import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container'
export default function ProductLayout() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Container>
        <div>Day la {id} </div>

        <Grid
          container spacing={2}
          border={1}>
          <Grid item xs={8} border={1}>
            Alo xs=8
          </Grid>
          <Grid item xs={4} border={1}>
            xs=4
          </Grid>
          <Grid item xs={4}>
            xs=4
          </Grid>
          <Grid item xs={8}>
            xs=8
          </Grid>
        </Grid>
      </Container>

    </>
  );
}
