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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { id } = useParams();
  //   console.log(id);
  //   if (id) {
  //     Records.find((item) => item.category.name === id);
  //   }

  // const categories = [...new Set(Records.map((item) => item.category.name))]
  const categories = Records.filter((item) => item.category.name === id);
  console.log(categories);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const ThemeComponent = styled(
    ShoppingBagIcon,
    AccountCircleIcon
  )({
    color: "white",
  });
  const ThemeComponent1 = styled(AccountCircleIcon)({
    color: "white",
  });
  // const { cartItems } = props;
  // const { onAdd, onRemove } = props;

  // console.log(cartItems);
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
            <IconButton>
              <ThemeComponent
                color="error"
                sx={{ mb: 1 }}
                fontSize="large"
                onClick={() => setState({ isPaneOpen: true })}
              />
            </IconButton>
            <SlidingPane
              className="some-custom-class"
              overlayClassName="some-custom-overlay-class"
              isOpen={state.isPaneOpen}
              title="Giỏ hàng của tôi"
              subtitle="Optional subtitle."
              width="40%"
              onRequestClose={() => {
                setState({ isPaneOpen: false });
              }}
            >
              <div>Giỏ hàng trống</div>
              {/* {cartItems.map((item) => (
                <div key={item.id} className="row mt-2">
                  <div className="col-3">
                    <img
                      src={item.Fd_image}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>

                  <div className="col-6">
                    <p className="my-4 mb-0 fw-bold fs-5">{item.Fd_name} </p>
                    <div>
                      <p className="m-0">
                        Số lượng: {item.qty} x {item.Fd_price}
                      </p>
                    </div>
                  </div>
                  <div className="col-3 ">
                    <div className="d-flex justify-content-center my-5">
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        className="me-3"
                        onClick={() => onAdd(item)}
                      />

                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        className=""
                        onClick={() => onRemove(item)}
                      />
                    </div>
                  </div>
                </div>
              ))} */}
              <br />
            </SlidingPane>
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
