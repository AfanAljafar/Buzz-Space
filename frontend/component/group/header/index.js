"use client";

import HeaderTitle from "../../single/headerTitle";
import "./header.css";
import Navbar from "../../single/navbar";
import Button from "../../single/button";

export default function Header({ summary }) {
  return (
    <div className="header-background">
      <div className="header-title">
        <HeaderTitle
          className="header-title"
          children={"Buzz Space!"}
          tribute={"by @AfanAljafar"}
        />
      </div>
      <div className="button-top">
        <button className="start-button">
          <Button children="Let's GO" />
        </button>
      </div>
      <div className="nav-bar">
        <Navbar />
      </div>
    </div>
  );
}
