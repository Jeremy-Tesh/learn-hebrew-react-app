import React, { useState } from "react";
import { Table } from "react-bootstrap";
import down from "../assets/icons/dow.png";
import collapse from "../assets/icons/right.png";
import { data } from "../data/Data";

function Description(props) {
  const status = {
    0: false,
    1: false,
    2: false,
    3: false,
  };

  const handleStatus = (i) => {
    // console.log(i);
    setDropDown({ ...dropDown, [i]: !dropDown[i] });
  };

  const [dropDown, setDropDown] = useState(status);
  const [more, setMore] = useState("");

  return (
    <div className="p-1 ">
      {data.elements[props.index].item.map((elt, i) => (
        <div
          key={i}
          className={`border-1 my-3 border-[#c2c2c2] ${
            dropDown[i] ? "" : "h-[40px]"
          }  `}
        >
          <div
            onClick={
              () => handleStatus(i)

              // dropDown === ""
              //   ? setDropDown(elt.option) && setClicked(true)
              //   : setDropDown("") && setClicked(false)
            }
          >
            <div className="flex items-center bg-[#ededed]">
              <img
                className="w-[20px] h-[20px] mx-2  "
                src={dropDown[i] ? down : collapse}
                alt=""
              />
              <p className="m-2">
                {elt.option}-{elt.stem}
              </p>
            </div>
          </div>

          <br></br>
          {dropDown[i] ? (
            <div className="m-3  font-Sbl">
              <p>{elt.description}</p>
              <span
                className=" hover:cursor-pointer text-blue-500"
                href="/"
                onClick={() =>
                  more === elt.option ? setMore("") : setMore(elt.option)
                }
              >
                More Examples
              </span>
              {more === elt.option ? (
                <div>
                  <Table responsive="sm">
                    <thead>
                      <tr>
                        <th>Piel</th>
                        <th>Root</th>
                        <th>Translation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {elt.moreExamples.map((e) => (
                        <tr>
                          {e.map((row) => (
                            <td className="font-Sbl">{row}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default Description;
