import React, { useState } from "react";
import data from "../data/Data.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const printNumbers = (n) => {
  var i;
};
console.log(printNumbers());
function Table() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-screen h-screen p-10  grid place-items-center">
      <div className="w-[1000px] grid grid-cols-[15]  grid-row-14 ">
        {Array.from(Array(15), (e, i) => {
          return (
            <div
              className="w-[60px] h-[60px] flex flex-col relative items-center justify-center "
              style={{
                gridColumn: i + 1,
                gridRow: 0,
                backgroundColor: "red",
              }}
              key={i}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="w-[1100px] z-0 grid grid-cols-[15] gap-y-2 grid-row-8">
        {isShown ? (
          <div className=" w-[300px] col-span-6 row-span-4 grid-cols-6 grid-rows-2">
            <Card />
          </div>
        ) : (
          ""
        )}
        {data.elements.map((element) => (
          <div
            className=" w-[60px] h-[60px] flex flex-col relative items-center justify-center"
            style={{
              gridColumn: element.xpos,
              gridRow: element.ypos,
              backgroundColor: colorMap[element.category],
              marginBottom: element.ypos === 8 ? "45px" : "0",
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            key={element.name}
            onClick={<Link to="/details" />}
          >
            <Link
              className="no-underline hover:underline text-black"
              to="/details"
            >
              <symbol className="">{element.symbol}</symbol>
              <small className="text-[8px] absolute top-[5px] left-[5px]">
                {element.number}
              </small>
              <small className="text-[8px] absolute bottom-[5px] left-[5px]">
                {element.name}
              </small>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
