"use client";

import HeaderTitle from "../../single/headerTitle";
import "./header.css";
import HeaderLink from "../../single/quicklink/headerlink";
import Button from "../../single/button";

export default function Header() {
  return (
    <div className="header-background">
      <HeaderTitle children={"Buzz Space!"} tribute={"by @AfanAljafar"} />
      <HeaderLink />
      <button className="start-button">
        <Button children="Let's GO" />
      </button>
    </div>
  );
}
