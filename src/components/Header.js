import React from "react";
import "../styles/Header.css";
import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div
          className="header__icon
        header__icon--active"
        >
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://www.androidcentral.com/sites/cordcutters.com/files/field/image/2018/09/hulu-logo.png?itok=bDkHrTDa"
        alt="img"
      />
    </div>
  );
}

export default Header;
