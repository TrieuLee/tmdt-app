import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function CommentSection() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = {
    spacing: {
      marginTop: "20px",
    },
  };

  return (
    <Container>
      <Grid container sx={theme.spacing} spacing={2}>
        <Grid item xs={9}>
          Mô tả sản phẩm
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Mô tả sản phẩm" value="1" />
                  <Tab label="Đánh giá sản phẩm" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </Grid>
        <Grid item xs={3}>
          Sản phẩm liên quan
        </Grid>
      </Grid>
    </Container>
  );
}
