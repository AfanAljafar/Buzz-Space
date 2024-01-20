import React from "react";
import "./np.css";
import Image from "next/image";

export default function NewsPaper() {
  return (
    <div className="bg-np">
      <div className="content-np">
        <Image src="/astronaut.png" width={350} height={350} alt="space" />
      </div>
      <h1 className="desc">Under Development by Space Engineer</h1>
    </div>
  );
}
