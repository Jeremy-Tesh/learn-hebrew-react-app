import React, { useState } from "react";
import { data } from "../data/Data";
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

const colorings = {
  1: "#b8f5ed",
  2: "#d5ebff",
  3: "#fff7a1",
  4: "#a3d977",
  5: "#f0a131",
  6: "#99d2f2",
  8: "#64b9a6",
  9: "#de5f85",
};

const mapping = (y) => {
  parseInt(y);
  if (y === 1 || y === 2 || y === 3) {
    console.log("first");
    return colorings[1];
  } else if (y === 4) {
    return colorings[2];
  } else if (y === 5) {
    return colorings[3];
  } else if (y === 6) {
    return colorings[4];
  } else if (y === 7) {
    return colorings[5];
  } else if (y === 8) {
    return colorings[6];
  } else if (y === 9) {
    return colorings[8];
  } else return colorings[9];
};

function Table() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-screen h-screen py-12  grid place-items-center">
      <div className="w-[1000px] grid grid-cols-[15]  grid-row-14 ">
        {Array.from(Array(15), (e, i) => {
          return (
            <div
              className="w-[60px] h-[60px] flex flex-col  relative items-center justify-center "
              style={{
                gridColumn: i + 1,
                gridRow: 0,
                backgroundColor: "#cccccc",
              }}
              key={i}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="flex">
        {/* <div className=" h-screen grid-cols-none grid-rows-6 ">
          {Array.from(Array(7), (e, i) => {
            return (
              <div
                className="w-[60px] h-[60px] flex items-center justify-center "
                style={{
                  backgroundColor: "#cccccc",
                }}
                key={i}
              >
                {i + 1}
              </div>
            );
          })}
        </div> */}
        <div className="w-[1000px] z-0 grid grid-cols-[15] gap-y-2 grid-row-8">
          {isShown ? (
            <div className=" w-[300px] col-span-6 row-span-4 grid-cols-8 grid-rows-4">
              <Card />
            </div>
          ) : (
            ""
          )}
          {data.elements.map((element, i) => (
            <div
              className="border-2 border-b-gray-500 w-[70px] h-[70px] flex flex-col relative items-center justify-center"
              style={{
                gridColumn: element.xpos,
                gridRow: element.ypos,
                backgroundColor: mapping(element.ypos),
                marginBottom: element.ypos === 8 ? "45px" : "0",
              }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              key={i}
            >
              <Link
                className="no-underline hover:underline text-black"
                to="/details"
              >
                <img className="w-[70px] h-[70x]" src={element.img} alt="img" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
