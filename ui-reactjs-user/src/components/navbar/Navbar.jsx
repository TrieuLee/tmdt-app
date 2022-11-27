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
import Cart from "../cart/Cart";

import { AuthContext } from "../../context/AuthContext";

export default function Navbar(props) {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const ThemeComponent = styled(
    ShoppingBagIcon,
    AccountCircleIcon
  )({
    color: "white",
  });
  const ThemeComponent1 = styled(AccountCircleIcon)({
    color: "white",
  });
  const [isLiked, setIsLiked] = useState(false);

  const { cartItems } = props;
  const { onAdd, onRemove } = props;

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
    console.log("search", searchTerm);
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
              <ThemeComponent color="error" sx={{ mb: 1 }} fontSize="large" />
              <Cart
                visible={isLiked}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onRequestClose={() => {
                  setIsLiked(isLiked);
                }}
              />
            </IconButton>

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
