import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
              <input type="text" placeholder="Search..." class="searchInput" />
              <img
                src={PF + "icon/search.png"}
                alt=""
                width="20"
                height="20"
                class="searchIcon"
              />
            </div>
          </div>
          <div className="navItem">
            <span className="limitedOffer">Limited Offer!</span>
          </div>
        </div>
        <div className="navBottom">
          <Link to="/airforce" className="menuItem">AIR FORCE</Link>
          <Link to="/jordan" className="menuItem">JORDAN</Link>
          <Link to="/blazer" className="menuItem">BLAZER</Link>
          <Link to="/hippie" className="menuItem">HIPPIE</Link>
          <Link to="/crater" className="menuItem">CRATER</Link>

        </div>
      </nav>
    </>
  );
}
