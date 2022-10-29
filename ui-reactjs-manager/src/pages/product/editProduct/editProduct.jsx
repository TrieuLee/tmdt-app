import React ,{useState} from "react";
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
export default function EditProduct({ title }) {
  // Hãng
  const [brand, setBrand] = useState("");
  const changeBrand = (event) => {
    setBrand(event.target.value);
  };

  // TÌnh trạng giày
  const [state, setState] = useState("");
  const changeState = (event) => {
    setState(event.target.value);
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
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Giá tiền"
                    variant="outlined"
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
                      <MenuItem value={"Còn hàng"}>Còn hàng</MenuItem>
                      <MenuItem value={"Hết hàng"}>Hết hàng</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography variant="p" component="h2">
                      Size:
                    </Typography>
                    <FormGroup sx={{ flexDirection: "row" }}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="38"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="39"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="40"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="41"
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
              <Button variant="contained" color="success">
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
