"use client";

import React, { useState } from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="menu-box">
          <Link className="a" href={"/"}>
            Home
          </Link>
          <Link className="b" href={"/project"}>
            Project
          </Link>
          <Link className="c" href={"/profile-page"}>
            About
          </Link>
          <Link className="d" href={"/services"}>
            Services
          </Link>
          <Link className="e" href={"/Contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
