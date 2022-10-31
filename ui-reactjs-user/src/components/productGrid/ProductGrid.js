import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Records from "../../server.json";
export default function ProductGrid() {
  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: "#000",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  const { id } = useParams();
  const categories = Records.filter((item) => item.category.name === id);
  console.log(categories);

  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  // let componentMounted = true;
  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //     if (componentMounted) {
  //       setData(await response.clone().json());
  //       setFilter(await response.json());
  //       setLoading(false);
  //       console.log(data);
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);

  return (
    <>
      <Container>
        <div>Day la {id} </div>
        <Grid container spacing={2} columns={16}>
          {Records.filter((record) => record.category.name == id).map(
            (record) => (
              <Grid item xs={4}>
                <Link to={`${record.id}`}>
                  <Card key={record.id} sx={{ maxWidth: 345 }}>
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
                          {record.price}
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
