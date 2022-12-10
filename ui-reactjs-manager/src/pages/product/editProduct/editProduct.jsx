import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./Edit.scss";
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
import axios from "axios";
import domain from "../../../utils/domain";
import { useNavigate } from "react-router-dom";
export default function EditProduct({ title }) {
  // Hãng
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState([]);
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const setData = () => {
    setBrand(JSON.parse(localStorage.getItem("editProduct")).brand);
    console.log(brand);
    setState(JSON.parse(localStorage.getItem("editProduct")).state);
    setName(JSON.parse(localStorage.getItem("editProduct")).name);
    setPrice(JSON.parse(localStorage.getItem("editProduct")).price);
    setFile(JSON.parse(localStorage.getItem("editProduct")).img);
  };
  useEffect(() => {
    if (localStorage.getItem("editProduct")) {
      setData();
    }
  }, []);

  const changeBrand = (event) => {
    setBrand(event.target.value);
  };

  // TÌnh trạng giày
  const changeState = (event) => {
    setState(event.target.value);
  };
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

    const product = {
      name: name ? name : undefined,
      price: price ? price : undefined,
      size: size ? size : [],
      brand: brand ? brand : [],
      state: state !== undefined ? state : true,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      product.img = fileName;
      try {
        await axios.post(`${domain}/api/upload`, data);
      } catch (err) {}
    }
    try {
      const header = JSON.parse(localStorage.getItem("user")).accessToken;
      const id = JSON.parse(localStorage.getItem("editProduct"))._id;
      await axios.put(`${domain}/api/products/${id}/${header}`, product);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
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
                    value={name ? name : "1"}
                    onChange={(e) => setName(e.target.value)}
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
                      <MenuItem value={"hippie"}>Hippie</MenuItem>
                      <MenuItem value={"hippie"}>Crater</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Giá tiền"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
