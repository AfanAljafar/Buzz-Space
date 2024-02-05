"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../component/group/header";
import "./tc.css";

function TemperaturConverter() {
  const [mode1, setMode1] = useState("Celcius (°C) :");
  const [mode2, setMode2] = useState("Fahrenheit (°F) :");

  const [explanation, setExplanation] = useState("");

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleConvert = () => {
    const celcius = parseFloat(input1);

    const fahrenheit = (9 / 5) * celcius + 32;

    setInput2(fahrenheit.toString());
    setExplanation(`(9 / 5) ${celcius} + 32 = ${fahrenheit}`);

    console.log(fahrenheit);
  };

  const handleReverse = () => {
    setMode1("Fahrenheit (°F) :");
    setMode2("Celcius (°C) :");

    const fahrenheit = parseFloat(input2);

    const celcius = (5 / 9) * (fahrenheit - 32);

    setInput2(celcius.toString());
    setExplanation(`(5 / 9) (${fahrenheit} - 32) = ${celcius}`);

    console.log(celcius);
  };

  const handleReset = () => {
    setInput1("");
    setInput2("");
    setMode1("Celcius (°C) :");
    setMode2("Fahrenheit (°F) :");
    setExplanation("");

    console.log(input1);
    console.log(input2);
  };

  return (
    <main>
      <Header />
      <div className="tc-container">
        <div className="inputSection">
          <label htmlFor="inputID">{mode1}</label>
          <input
            type="number"
            id="inputID"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="buttonsection">
          <button className="x" onClick={handleConvert} id="buttonConvert">
            Convert
          </button>
          <button className="y" onClick={handleReset} id="buttonReset">
            Reset
          </button>
          <button className="z" onClick={handleReverse} id="buttonReverse">
            Reverse
          </button>
        </div>
        <div className="outputSection">
          <label htmlFor="outputID">{mode2}</label>
          <input type="number" id="outputID" value={input2} readOnly />
        </div>
        <div className="explanation">
          <label htmlFor="explanationID">Explanation: </label>
          <input type="text" id="explanationID" value={explanation} readOnly />
        </div>
      </div>
    </main>
  );
}

export default TemperaturConverter;
