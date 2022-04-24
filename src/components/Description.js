import React, { useState } from "react";
import { Table } from "react-bootstrap";
import down from "../assets/icons/dow.png";
import collapse from "../assets/icons/right.png";
import { data } from "../data/Data";

function Description() {
  const [clicked, setClicked] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <div className="p-1 ">
      {data.elements[0].item.map((elt, i) => (
        <div
          key={i}
          className={`border-1 border-[#c2c2c2]  ${clicked ? "" : "h-[38px]"} `}
        >
          <div onClick={() => setClicked(!clicked)}>
            <div className="flex items-center  bg-[#ededed]">
              <img
                className="w-[20px] h-[20px] mx-2  "
                src={clicked ? down : collapse}
                alt=""
              />
              <p className="m-2">
                {elt.option}-{elt.stem}
              </p>
            </div>
          </div>

          <br></br>
          {clicked ? (
            <div className="m-3">
              <p>{elt.description}</p>
              <span
                className=" hover:cursor-pointer text-blue-500"
                href="/"
                onClick={() => setMore(!more)}
              >
                More Examples
              </span>
              {more ? (
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
                            <td>{row}</td>
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
