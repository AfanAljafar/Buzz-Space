"use client";

import HeaderTitle from "../../single/headerTitle";
import "./header.css";
import Navbar from "../../single/navbar";
import Button from "../../single/button";
import Typewriter from "typewriter-effect";

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
      <div className="summary">
        <Typewriter
          onInit={(Typewriter) => {
            Typewriter.pauseFor(2500)
              .changeDelay(50)
              .typeString(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi libero, finibus ut ligula eu, condimentum imperdiet libero. Quisque tincidunt efficitur purus, vel finibus elit laoreet non. Phasellus scelerisque feugiat nisl eu fermentum."
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}
