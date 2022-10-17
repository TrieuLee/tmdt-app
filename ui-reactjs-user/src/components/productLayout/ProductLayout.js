import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid"; // Grid version 1
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function ProductLayout() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#000",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <div>Day la {id} </div>
        <h1> Fetch data from an api in react </h1>

        <Grid container border={1} spacing={2}>
          {filter.map((item) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {/* <div>{item.id}</div> */}
              {/* <img
                style={{ width: "20%", height: "20%" }}
                src={item.images}
                alt=""
              /> */}
              {/* <div>{item.title}</div> */}
              {/* <div>{item.description}</div> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
