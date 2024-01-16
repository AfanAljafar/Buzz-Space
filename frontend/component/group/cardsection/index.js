"use client";

import "./cardsection.css";
import Card from "../../single/card";
import { MovingComponent } from "react-moving-text";

export default function CardSection() {
  return (
    <section className="card-section">
      <MovingComponent
        type="fadeInFromBottom"
        duration="1s"
        delay="0s"
        direction="row"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Card children={"lorem ipsum"} />
      </MovingComponent>
      <MovingComponent
        type="fadeInFromBottom"
        duration="2s"
        delay="0s"
        direction="row"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Card children={"lorem ipsum"} />
      </MovingComponent>
      <MovingComponent
        type="fadeInFromBottom"
        duration="3s"
        delay="0s"
        direction="row"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Card children={"lorem ipsum"} />
      </MovingComponent>
      <MovingComponent
        type="fadeInFromBottom"
        duration="4s"
        delay="0s"
        direction="row"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Card children={"lorem ipsum"} />
      </MovingComponent>
    </section>
  );
}
