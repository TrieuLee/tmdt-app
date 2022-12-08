import React, { useState, useRef } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./New.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import domain from "../../../utils/domain";

export default function New({ title }) {
  // Hãng
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState([]);
  const [state, setState] = useState(true);
  const name = useRef("");
  const price = useRef("");
  const navigate = useNavigate();
  const changeBrand = (event) => {
    setBrand(event.target.value);
  };
  // TÌnh trạng giày

  const changeState = (event) => {
    setState(event.target.value);
  };
  // tình trang size
  const handleChange = (e) => {
    const arr = size;
    if (e.target.checked) {
      arr.push(e.target.value);
      setSize(arr);
    } else {
      const x = arr.length > 1 ? arr.filter((i) => i !== e.target.value) : [];
      setSize(x);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      name: name.current.value,
      price: price.current.value,
      size: size ? size : [],
      brand: brand ? brand : [],
      state: state ? state : true,
    };
    try {
      const header = JSON.parse(localStorage.getItem("user")).accessToken;
      await axios.post(`${domain}/api/products/${header}`, user);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              autoComplete="off"
              onSubmit={handleClick}
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin sản phẩm
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    label="Tên sản phẩm"
                    variant="outlined"
                    inputRef={name}
                  />
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">Hãng</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={brand}
                      label="Hãng"
                      onChange={changeBrand}
                    >
                      <MenuItem value={"Air Force"}>Air Force</MenuItem>
                      <MenuItem value={"Jordan"}>Jordan</MenuItem>
                      <MenuItem value={"Blazer"}>Blazer</MenuItem>
                      <MenuItem value={"Crater"}>Crater</MenuItem>
                      <MenuItem value={"Hippie"}>Hippie</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Giá tiền"
                    variant="outlined"
                    inputRef={price}
                  />
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Tình trạng
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={state}
                      label="Tình trạng"
                      onChange={changeState}
                    >
                      <MenuItem value={true}>Còn hàng</MenuItem>
                      <MenuItem value={false}>Hết hàng</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography variant="p" component="h2">
                      Size:
                    </Typography>
                    <FormGroup
                      onChange={handleChange}
                      sx={{ flexDirection: "row" }}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label="38"
                        value={38}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="39"
                        value={39}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="40"
                        value={40}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="41"
                        value={41}
                      />
                    </FormGroup>
                  </div>
                </div>

                <div>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </div>
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained">Đặt lại</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
