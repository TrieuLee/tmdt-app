import React from "react";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Records from "../../server.json";
export default function ProductGrid() {
  const { id } = useParams();
  const categories = Records.filter((item) => item.category.name === id);
  console.log(categories);

  return (
    <>
      <Container>
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
