import React, { useState } from "react";
import Card from "../components/Card";
import { data } from "../data/Data";

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

  return (
    <div className="w-screen flex h-full">
      <div className="w-screen  py-12">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-[15]  gap-x-3 pb-24  grid-row-14 ">
            {Array.from(Array(14), (e, i) => {
              return (
                <div
                  className="w-[80px] h-[51px] flex flex-col items-center justify-center box-border "
                  style={{
                    gridColumn: i + 1,
                    gridRow: 0,
                    backgroundColor: "#cccccc",
                  }}
                  key={i}
                >
                  {String.fromCharCode(78 - i)}
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
                className="border-none border-b-gray-500 w-[80px] h-[51px] "
                style={{
                  gridColumn: element.xpos,
                  gridRow: element.ypos,
                  backgroundColor: mapping(element.ypos, element.xpos),
                  marginBottom: element.ypos === 8 ? "5px" : "5px",
                }}
                // onMouseEnter={() => {
                //   // index(i);
                //   setIndex(i);
                //   console.log(i);
                //   element.name === "none"
                //     ? setIsShown(false)
                //     : setIsShown(true);
                // }}
                // onMouseLeave={() => setIsShown(false)}
                key={i}
              >
                <button
                  className="no-underline hover:underline text-black"
                  onClick={() => {
                    setIndex(i);
                    element.name === "none"
                      ? setIsShown(false)
                      : setIsShown(true)
                  }}
                >
                  {element.name === "none" ? (
                    <div
                      className="w-[80px] h-[51px]  "
                      style={{
                        backgroundColor: "#6d747f",
                        borderColor: "#6e716c",
                        borderWidth: "2px",
                      }}
                      // onMouseEnter={() => {
                      //   setIndex(100);
                      //   setIsShown(false);
                      // }}
                    ></div>
                  ) : (
                    <img
                      className="w-[80px] h-[51px] bg-contain"
                      src={element.img}
                      alt="img"
                    />
                  )}
                </button>
              </div>
            ))}
            {true ? (
              <div className="absolute top-[7%] left-[27.6%] ">
                <Card
                  index={index}
                  show={isShown}
                  isViewDetails={true}
                  setIsShown={setIsShown}
                />
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
