import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Record from "../../server.json";
import "./navbar.scss";
import "react-sliding-pane/dist/react-sliding-pane.css";
import NavDropDown from "../navDropDown/NavDropDown";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SlidingPane from "react-sliding-pane";
import { AuthContext } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
const ThemeComponent = styled(
  ShoppingBagIcon,
  AccountCircleIcon
)({
  color: "white",
});
const ThemeComponent1 = styled(AccountCircleIcon)({
  color: "white",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid black`,
    padding: "0 4px",
  },
}));
export default function Navbar(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = props;
  const { onAdd, onRemove } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
    console.log("search", searchTerm);
  };

  const itemsPrice = cartItems
    ? cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    : 0;
  const dis = itemsPrice * 0.01;
  const shippingPrice = itemsPrice < 200000 ? 0 : dis;
  const totalPrice = itemsPrice + shippingPrice;
  function SetCartPayment() {
    const lstOrFd = {
      cart: cartItems,
      itemsPrice: itemsPrice ? itemsPrice : "",
      shippingPrice: shippingPrice ? shippingPrice : "",
      totalPrice: totalPrice ? totalPrice : "",
    };
    localStorage.setItem("lstOrFd", JSON.stringify(lstOrFd));
  }
  return (
    <>
      <nav className="nav">
        <div className="navTop">
          <div className="navItem">
            <Link to="/">
              <img
                src={PF + "img/sneakers.png"}
                alt=""
                className="sidebarFriendImg"
              />
            </Link>
          </div>
          <div className="navItem">
            <div className="search">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Tìm kiếm..."
                className="searchInput"
              />

              <img
                src={PF + "icon/search.png"}
                alt=""
                width="20"
                height="20"
                className="searchIcon"
                onClick={() => onSearch(search)}
              />
            </div>
            <div
              className="dropdown"
              style={{
                position: "absolute",
                width: "29%",
                zIndex: "1",
                marginTop: "5px",
              }}
            >
              {Record.filter((item) => {
                const searchTerm = search.toLowerCase();
                const title = item.title.toLowerCase();

                return (
                  searchTerm &&
                  title.startsWith(searchTerm) &&
                  title !== searchTerm
                );
              })
                .slice(0, 10)
                .map((item) => (
                  <Link
                    to={`/${item.category.name}/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      onClick={() => onSearch(item.title)}
                      className="dropdown-row"
                      style={{
                        border: "1px solid black",
                        backgroundColor: "white",
                        width: "100%",
                        marginTop: "0px",
                      }}
                      key={item.id}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={item.images}
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            verticalAlign: "middle",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="navItem">
            <IconButton onClick={() => setIsLiked(!isLiked)}>
              <StyledBadge badgeContent={quantity} color="secondary">
                <ThemeComponent color="error" sx={{ mb: 1 }} fontSize="large" />
              </StyledBadge>
            </IconButton>

            <SlidingPane
              className="some-custom-class"
              isOpen={isLiked}
              title="Giỏ hàng của tôi"
              width="40%"
              onRequestClose={() => {
                setIsLiked(!isLiked);
              }}
            >
              {cart.products && cart.products.length === 0 && (
                <p>Giỏ hàng trống</p>
              )}
              {cart.products.map((item) => (
                <Grid container key={item._id}>
                  <Grid item xs={3}>
                    <img src={item.images} style={{ width: "100px" }} alt="" />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      <li>
                        <b>{item.title}</b>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <b>
                          {item.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </b>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <b>Size:</b> {item.size}
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <b>Số lượng:</b> {item.quantity} x{" "}
                        {item.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </li>
                    </ul>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <IconButton onClick={() => onAdd(item)}>
                      <AddCircleIcon />
                    </IconButton>

                    <IconButton onClick={() => onRemove(item)}>
                      <RemoveCircleIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              {cart.products && cart.products.length !== 0 && (
                <>
                  <div style={{ marginTop: "70%" }}>
                    <p style={{ display: "flex", justifyContent: "end" }}>
                      Tạm tính:{" "}
                      {cart.total?.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p style={{ display: "flex", justifyContent: "end" }}>
                      Phí ship:{" "}
                      {shippingPrice.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p style={{ display: "flex", justifyContent: "end" }}>
                      Tổng tiền:{" "}
                      {totalPrice.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                  {user ? (
                    <Link
                      type="submit"
                      value="Thanh toán"
                      to="/checkout"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={SetCartPayment}
                    >
                      <Button variant="contained" sx={{ width: "100%" }}>
                        Thanh Toán
                      </Button>
                    </Link>
                  ) : (
                    <p>Hãy đăng nhập để thanh toán sản phẩm</p>
                  )}
                </>
              )}
            </SlidingPane>

            {user == null ? (
              <Link to="/login">
                <ThemeComponent1 sx={{ mb: -1.2 }} fontSize="large" />
              </Link>
            ) : (
              user && <NavDropDown />
            )}
          </div>
        </div>
        <div
          className="navMiddle"
          style={{ borderBottom: "1px solid white" }}
        />
        <div className="navBottom">
          <Link to="/airforce" className="menuItem">
            AIR FORCE
          </Link>
          <Link to="/jordan" className="menuItem">
            JORDAN
          </Link>
          <Link to="/blazer" className="menuItem">
            BLAZER
          </Link>
          <Link to="/hippie" className="menuItem">
            HIPPIE
          </Link>
          <Link to="/crater" className="menuItem">
            CRATER
          </Link>
        </div>
      </nav>
    </>
  );
}
