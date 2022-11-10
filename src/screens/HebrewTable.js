import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { data } from "../data/Data";
import bg from "../assets/box/solidbg.png";

// const colorings = {
//   1: "#b8f5ed",
//   2: "#d5ebff",
//   3: "#fff7a1",
//   4: "#a3d977",
//   5: "#f0a131",
//   6: "#99d2f2",
//   8: "#64b9a6",
//   9: "#de5f85",
//   0: "#cccccc",
// };

// const mapping = (y, x) => {
//   parseInt(y);
//   if (x === 1) {
//     return colorings[0];
//   } else if (y === 1 || y === 2 || y === 3) {
//     return colorings[1];
//   } else if (y === 4) {
//     return colorings[2];
//   } else if (y === 5) {
//     return colorings[3];
//   } else if (y === 6) {
//     return colorings[4];
//   } else if (y === 7) {
//     return colorings[5];
//   } else if (y === 8) {
//     return colorings[6];
//   } else if (y === 9) {
//     return colorings[8];
//   } else return colorings[9];
// };

function Table() {
  const [isShown, setIsShown] = useState(false);
  const [index, setIndex] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="lg:px-8 md:px-5 px-2  w-screen flex h-full">
      <div className="w-screen  py-12">
        <div className="w-full flex justify-center ">
          <div className="grid sm:gap-x-1 gap-x-3 pb-24 grid-flow-col">
            {Array.from(Array(14), (e, i) => {
              return (
                <div className="border-none border-b-gray-500 max-w[80px] relative max-h-[54px] w-auto sm:h-auto  ">
                  <img
                    className="w-full bg-cover h-full"
                    src={bg}
                    alt="img"
                  ></img>
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 h-fit text-center m-auto text-[1.7vh]"
                    style={{
                      gridColumn: i + 1,
                      gridRow: 0,
                    }}
                    key={i}
                  >
                    {String.fromCharCode(78 - i)}
                  </div>
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
          <div className=" grid sm:gap-x-1 gap-x-3 ">
            {data.elements.map((element, i) => (
              <div
                className="border-none border-b-gray-500 max-w[80px] max-h-[54px] w-auto sm:h-auto  "
                style={{
                  gridColumn: element.xpos,
                  gridRow: element.ypos,
                  // backgroundColor: mapping(element.ypos, element.xpos),
                  marginBottom: element.ypos === 8 ? "5px" : "5px",
                }}
                // onMouseEnter={() => {
                // index(i);
                // setIndex(i);
                // console.log(i);
                // element.name === "none"
                //   ? setIsShown(false)
                //   : setIsShown(true);
                // }}
                // onMouseLeave={() => setIsShown(false)}
                key={i}
              >
                <button
                  className="w-full h-full no-underline hover:underline text-black"
                  onClick={() => {
                    setIndex(i);
                    element.name === "none"
                      ? setIsShown(false)
                      : setIsShown(true);
                  }}
                >
                  {element.name === "none" ? (
                    <div
                      className="w-full h-full  "
                      style={{
                        backgroundColor: "#6d747f",
                        borderColor: "#6e716c",
                        borderWidth: "2px",
                        background: "contain",
                      }}
                      // onMouseEnter={() => {
                      //   setIndex(100);
                      //   setIsShown(false);
                      // }}
                    ></div>
                  ) : (
                    <img
                      className="w-full h-full bg-contain"
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
