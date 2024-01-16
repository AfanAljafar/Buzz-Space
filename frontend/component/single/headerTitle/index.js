"use client";

import Image from "next/image";
import "./header-title.css";
import React from "react";
import { MovingComponent } from "react-moving-text";

export default function HeaderTitle({ children, tribute }) {
  return (
    <div className="title-header">
      <MovingComponent
        type="fadeInFromBottom"
        duration="2s"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="title-section">
          <Image src="/logo.png" width={100} height={100} alt="log" />
          <h1 className="title">{children}</h1>
        </div>
        <div className="tribute">{tribute}</div>
      </MovingComponent>
    </div>
  );
}
