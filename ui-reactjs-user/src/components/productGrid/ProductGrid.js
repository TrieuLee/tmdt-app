import React from "react";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import { Helmet } from "react-helmet-async";
import Records from "../../server.json";
export default function ProductGrid() {
  const { id } = useParams();
  const categories = Records.filter((item) => item.category.name === id);
  console.log(categories);

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
      underline="hover"
      key="2"
      style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}
    >
      {id}
    </Link>,
  ];
  return (
    <>
      <Helmet>
        <title>Product</title>
        <meta name="description" content="Sneaker from us is the best" />
        <link rel="canonical" href="/jordan" />
      </Helmet>
      <Container>
        <Stack spacing={2} sx={{ my: 2 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Grid container spacing={2} columns={16}>
          {Records.filter((record) => record.category.name == id).map(
            (record, i) => (
              <Grid key={i} item xs={4}>
                <Link to={`${record.id}`} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={record.images}
                        alt=""
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {record.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {record.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {record.category.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}
