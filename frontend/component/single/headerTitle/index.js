"use client";

import Image from "next/image";
import "./header-title.css";
import React from "react";
import Link from "next/link";
import { MovingComponent } from "react-moving-text";

export default function HeaderTitle({ children, tribute }) {
  return (
    <div className="title-header">
      <Link className="linktohome" href={"/"}>
        {/*}  type="fadeInFromBottom"
        duration="2s"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
  >*/}
        <Image src="/logo.png" width={90} height={90} alt="log" />
        <div className="title-section">
          <h1 className="title">{children}</h1>
          <div className="tribute">{tribute}</div>
        </div>
        {/*</MovingComponent>*/}
      </Link>
    </div>
  );
}
