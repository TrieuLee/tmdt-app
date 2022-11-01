import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useParams } from "react-router-dom";
import Records from "../../server.json";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { styled } from "@mui/system";
import Cart from "../../components/cart/Cart";
import Button from "@mui/material/Button";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function Navbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { id } = useParams();
  //   console.log(id);
  //   if (id) {
  //     Records.find((item) => item.category.name === id);
  //   }

  // // const categories = [...new Set(Records.map((item) => item.category.name))]
  // const categories = Records.filter((item) => item.category.name === id);
  // console.log(categories);

  const ThemeComponent = styled(
    ShoppingBagIcon,
    AccountCircleIcon
  )({
    color: "white",
  });
  const ThemeComponent1 = styled(AccountCircleIcon)({
    color: "white",
  });

  const [state, setState] = useState({
    isPaneOpen: false,
  });

  return (
    <>
      <nav className="nav">
        <div className="navTop">
          <div className="navItem">
            <img
              src={PF + "img/sneakers.png"}
              alt=""
              className="sidebarFriendImg"
            />
          </div>
          <div className="navItem">
            <div className="search">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="searchInput"
              />
              <img
                src={PF + "icon/search.png"}
                alt=""
                width="20"
                height="20"
                className="searchIcon"
              />
            </div>
          </div>
          <div className="navItem">
            <Button onClick={() => setState({ isPaneOpen: true })}>
              <Cart
                visible={state.isPaneOpen}
                onRequestClose={() => {
                  // triggered on "<" on left top click or on outside click
                  setState({ isPaneOpen: false });

                  console.log(setState({ isPaneOpen: false }))
                }}
              />
              <ThemeComponent color="error" sx={{ mb: 1 }} fontSize="large" />
            </Button>

            <IconButton>
              <Link to="/login">
                <ThemeComponent1 fontSize="large"></ThemeComponent1>
              </Link>
            </IconButton>
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
