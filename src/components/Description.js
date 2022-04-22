import React, { useState } from "react";
import { Table } from "react-bootstrap";
import down from "../assets/icons/dow.png";
import collapse from "../assets/icons/right.png";
import { data } from "../data/Data";

function Description() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-1 ">
      {data.elements[0].item.map((elt, i) => (
        <div
          key={i}
          className={`border-1 border-[#c2c2c2]  ${clicked ? "" : "h-[38px]"} `}
          onClick={() => setClicked(!clicked)}
        >
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

          <br></br>
          {clicked ? (
            <div className="m-3">
              <p>{elt.description}</p>
              <a href="/">More Examples</a>
              <div>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Root</th>
                      <th>Translation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elt.moreExamples[0]?.forEach(function (e) {
                      <p>f</p>;
                    })}
                  </tbody>
                </Table>
              </div>
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
