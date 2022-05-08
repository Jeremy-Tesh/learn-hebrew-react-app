import React, { useState } from "react";
import { data } from "../data/Data";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const colorings = {
  1: "#b8f5ed",
  2: "#d5ebff",
  3: "#fff7a1",
  4: "#a3d977",
  5: "#f0a131",
  6: "#99d2f2",
  8: "#64b9a6",
  9: "#de5f85",
  0: "#cccccc",
};

const mapping = (y, x) => {
  parseInt(y);
  if (x === 1) {
    return colorings[0];
  } else if (y === 1 || y === 2 || y === 3) {
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
  const [index, setIndex] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="w-screen flex h-full">
      <div className="w-screen  py-12">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-[15]  gap-x-3 pb-24  grid-row-14 ">
            {Array.from(Array(15), (e, i) => {
              return (
                <div
                  className="w-[63px] h-[63px] flex flex-col items-center justify-center "
                  style={{
                    gridColumn: i + 1,
                    gridRow: 0,
                    backgroundColor: "#cccccc",
                  }}
                  key={i}
                >
                  {String.fromCharCode(79 - i)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* <div className=" h-screen grid-cols-none grid-rows-6 ">
          {Array.from(Array(7), (e, i) => {
            return (
              <div
                className="w-[68px] h-[60px] flex items-center justify-center "
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
          <div className=" grid grid-cols-[15] gap-x-3 grid-row-14 ">
            {data.elements.map((element, i) => (
              <div
                className="border-2 border-b-gray-500 w-[68px] h-[68px] "
                style={{
                  gridColumn: element.xpos,
                  gridRow: element.ypos,
                  backgroundColor: mapping(element.ypos, element.xpos),
                  marginBottom: element.ypos === 8 ? "45px" : "0",
                }}
                onMouseEnter={() => {
                  // index(i);
                  setIndex(i);
                  console.log(i);
                  element.name === "none"
                    ? setIsShown(false)
                    : setIsShown(true);
                }}
                onMouseLeave={() => setIsShown(false)}
                key={i}
              >
                <button
                  className="no-underline hover:underline text-black"
                  onClick={() =>
                    index === 100 ? "" : navigate(`/details/${i}`)
                  }
                >
                  {element.name === "none" ? (
                    <div
                      className="w-[68px] h-[68px]  "
                      style={{
                        backgroundColor: "#cccccc",
                      }}
                      onMouseEnter={() => {
                        setIndex(100);
                        setIsShown(false);
                      }}
                    ></div>
                  ) : (
                    <img
                      className="w-[68px] h-[68px] bg-contain"
                      src={element.img}
                      alt="img"
                    />
                  )}
                </button>
              </div>
            ))}
            {true ? (
              <div className="absolute top-[13%] left-[34%]">
                <Card index={index} show={isShown} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
