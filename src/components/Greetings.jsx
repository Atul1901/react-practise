import React, { useState, useEffect } from "react";
import { wishing } from "../utils/helper";

function Greetings() {
  const [greeting, setGreeting] = useState("");
  const [color, setColor] = useState("");
  const [time, setTime] = useState();

  // Function to determine the appropriate greeting based on the current time
  function getGreeting() {
    const value = wishing();
    setGreeting(value.wish);
    setColor(value.color);
    setTime(value.time);
  }

  useEffect(() => {
    setInterval(getGreeting, 1000);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <p className="current-time">{time}</p>
      <h1 style={{ color: color }}>{greeting}</h1>
    </div>
  );
}

export default Greetings;
