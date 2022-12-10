import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { url } from "../../stripeAPI";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./Grid.scss";
import { FaStripe } from "react-icons/fa";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import domain from "../../utils/domain";
const StyledTableCell = styled(
  TableCell,
  Paper
)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CheckOutGrid(props) {
  const carts = !localStorage.lstOrFd ? "" : JSON.parse(localStorage.lstOrFd);
  console.log(carts.cart);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  function listCart() {
    return carts.cart.map((item, i) => {
      return (
        <React.Fragment key={i}>
          <TableRow>
            <StyledTableCell component="th">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.img}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                  alt=""
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  <p style={{ fontWeight: "bold" }}>Size: {item.size}</p>
                </div>
              </div>
            </StyledTableCell>

            <StyledTableCell>
              <p>$ {item.price}</p>
            </StyledTableCell>
            <StyledTableCell>
              <p>{item.quantity}</p>
            </StyledTableCell>
          </TableRow>
        </React.Fragment>
      );
    });
  }
  function orderSummary() {
    return (
      <React.Fragment>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Tổng số lượng : {carts.total.totalQuantity}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Tổng cộng: $ {carts.total.subPrice}
          </StyledTableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }
  const handleStripe = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        carts,
        userId: user.user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleMoney = () => {
    navigate("/checkout-cash");
  };

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TableContainer>
              <Paper variant="outlined" square>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Tên sản phẩm</StyledTableCell>
                      <StyledTableCell>Giá</StyledTableCell>
                      <StyledTableCell>Số lượng</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{listCart()}</TableBody>
                </Table>
              </Paper>
            </TableContainer>
          </Grid>

          <Grid item xs={4}>
            <TableContainer>
              <Paper variant="outlined" square>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{ textAlign: "center" }}>
                        TÓM TẮT ĐƠN HÀNG
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {/* Nội dung */}
                  <TableBody>{orderSummary()}</TableBody>
                </Table>
              </Paper>
              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  square="true"
                  sx={{ width: "100%", borderRadius: "0px" }}
                  onClick={() => handleStripe()}
                >
                  <FaStripe style={{ fontSize: "30px", marginRight: "10px" }} />
                  THANH TOÁN BẰNG STRIPE
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "0px",
                  }}
                  onClick={() => handleMoney()}
                >
                  <LocalAtmIcon style={{ marginRight: "10px" }} />
                  THANH TOÁN BẰNG TIỀN MẶT
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "0px",
                  }}
                >
                  <Link to="/airforce" className="addMore">
                    MUA THÊM SẢN PHẨM
                  </Link>
                </Button>
              </div>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
