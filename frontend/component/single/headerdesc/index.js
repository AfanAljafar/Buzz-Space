"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function HeaderDesc() {
  return (
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
  );
}
