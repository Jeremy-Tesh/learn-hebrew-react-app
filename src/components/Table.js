import React from "react";
import data from "../data/Data.json";

function Table() {
  return (
    <div className="grid grid-cols-12 gap-[64px]">
      {data.elements.map((element) => (
        <div
          style={{
            gridColumn: element.xpos,
            gridRow: element.ypos,
          }}
          key={element.name}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
}

export default Table;
