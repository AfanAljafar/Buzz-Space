import React from "react";
import "./footer.css";
import FooterTitle from "../../single/footertitle";
import FooterSocmed from "../../single/quicksocmed/footersocmed";

export default function Footer() {
  return (
    <footer className="footer">
      <FooterTitle children={"Buzz Space!"} tribute={"by @AfanAljafar"} />
      <p className="gap">|</p>
      <FooterSocmed />
    </footer>
  );
}
