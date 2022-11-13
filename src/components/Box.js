import React from "react";
import { data } from "../data/Data";

function Box(props) {
  return (
    <div className="border-none border-b-gray-500 aspect-auto">
      <img
        className="w-full h-full bg-contain"
        src={data.elements[props.index].img}
        alt="img"
      />
    </div>
  );
}

export default Box;
