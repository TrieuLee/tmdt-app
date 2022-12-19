import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";
// import Record from "../../server.json";
import "./navbar.scss";
import NavDropDown from "../navDropDown/NavDropDown";
import Cart from "../cart/Cart";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { AuthContext } from "../../context/AuthContext";
import domain from "../../utils/domain";

const ThemeComponent = styled(ShoppingBagIcon)({
  color: "white",
});
const ThemeComponent1 = styled(AccountCircleIcon)({
  color: "white",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 13,
    padding: "0 4px",
    zIndex: "0",
  },
}));
export default function Navbar(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const cart = useSelector((state) => state.cart.products);
  // console.log(cart);

  const location = useLocation();
  const cate = location.pathname.split("/")[1];
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${domain}/api/products`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cate]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

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
              {products
                .filter((item) => {
                  const searchTerm = search.toLowerCase();
                  const title = item.name.toLowerCase();

                  return (
                    searchTerm &&
                    title.startsWith(searchTerm) &&
                    title !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <Link
                    to={`/${item.brand}/${item._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      onClick={() => onSearch(item.name)}
                      className="dropdown-row"
                      style={{
                        border: "1px solid black",
                        backgroundColor: "white",
                        width: "100%",
                        marginTop: "0px",
                      }}
                      key={item._id}
                    >
                      <div style={{ display: "flex" }}>
                        <img
                          src={item.img}
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            verticalAlign: "middle",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="navItem" style={{ display: "flex" }}>
            <StyledBadge
              badgeContent={cart.length ? cart.length : "0"}
              color="secondary"
            >
              <ThemeComponent
                sx={{ mb: 1.5, mr: 1.5 }}
                fontSize="large"
                onClick={() => {
                  setIsLiked(!isLiked);
                }}
              />
            </StyledBadge>
            <Cart
              isOpen={isLiked}
              onRequestClose={() => {
                setIsLiked(!isLiked);
              }}
            />
            {user == null ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ThemeComponent1 sx={{ mb: 1 }} fontSize="large" />
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
