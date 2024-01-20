"use client";

import HeaderTitle from "../../single/headerTitle";
import "./header.css";
import Button from "../../single/button";

export default function Header() {
  return (
    <div className="header-background">
      <HeaderTitle children={"Buzz Space!"} tribute={"by @AfanAljafar"} />
      <button className="start-button">
        <Button children="Let's GO" />
      </button>
    </div>
  );
}
