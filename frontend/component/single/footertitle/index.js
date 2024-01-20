import React from "react";
import Image from "next/image";
import "./footertitle.css";

export default function FooterTitle({ children, tribute }) {
  return (
    <div className="title-footer">
      <Image src="/logo.png" width={70} height={70} alt="log" />
      <div className="title-section-footer">
        <h3 className="titledesc-footer">{children}</h3>
        <div className="tribute-footer">{tribute}</div>
      </div>
    </div>
  );
}
