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
  const [file, setFile] = useState(null);
  const name = useRef("");
  const price = useRef("");
  const quantity = useRef("");

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
    const header = JSON.parse(localStorage.getItem("user")).accessToken;
    const product = {
      name: name.current.value,
      price: price.current.value,
      size: size ? size : [],
      brand: brand ? brand : [],
      state: state ? state : true,
      quantity: quantity.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append("name", fileName);
      data.append("file", file);
      product.img = fileName;
      try {
        await axios.post(`${domain}/api/upload`, data);
      } catch (err) {}
    }
    try {
      await axios.post(`${domain}/api/products/${header}`, product);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };
  // const onFileChange = (event) => {
  //   // Update the state
  //   setImage(event);
  //   console.log(image);
  // };

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
                      <MenuItem value={"airforce"}>Air Force</MenuItem>
                      <MenuItem value={"jordan"}>Jordan</MenuItem>
                      <MenuItem value={"blazer"}>Blazer</MenuItem>
                      <MenuItem value={"crater"}>Crater</MenuItem>
                      <MenuItem value={"hippie"}>Hippie</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Giá tiền"
                    variant="outlined"
                    inputRef={price}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Số lượng"
                    variant="outlined"
                    inputRef={quantity}
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
                  <Button variant="contained" component="label" htmlFor="file">
                    Upload
                    <input
                      name="image"
                      accept=".png,.jpeg,.jpg"
                      type="file"
                      id="file"
                      hidden
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </Button>
                </div>
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained">Đặt lại</Button>
              {/* <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(image)}
              /> */}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
