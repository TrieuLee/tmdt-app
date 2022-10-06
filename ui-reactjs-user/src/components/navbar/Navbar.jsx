import React from "react";
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
          <h3 className="menuItem">AIR FORCE</h3>
          <h3 className="menuItem">JORDAN</h3>
          <h3 className="menuItem">BLAZER</h3>
          <h3 className="menuItem">CRATER</h3>
          <h3 className="menuItem">HIPPIE</h3>
        </div>
      </nav>
    </>
  );
}
