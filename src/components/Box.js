import React from "react";
import { data } from "../data/Data";

function Box(props) {
  return (
    <div className="border-none mx-4 border-b-gray-500 w-[20%] h-[20%]">
      <img
        className="w-full h-full bg-contain"
        src={data.elements[props.index].img}
        alt="img"
      />
    </div>
  );
}

export default Box;