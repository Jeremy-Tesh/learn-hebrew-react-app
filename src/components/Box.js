import { render } from "@testing-library/react";
import React, { useState } from "react";
import Card from "./Card";

function Box() {
  const [isHovering, setIsHovering] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleMouseHover = () => {
    <Card />;
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  console.log(isHovering);
  return (
    <div>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="h-[48px] w-[50px] text-center bg-red-800"
      >
        {" "}
        HR
      </div>
      {isShown ? <Card /> : ""}
    </div>
  );
}

export default Box;
