import React, { useState } from "react";
import { Table } from "react-bootstrap";
import down from "../assets/icons/dow.png";
import collapse from "../assets/icons/right.png";
import { data } from "../data/Data";
import { useNavigate } from "react-router-dom";

function Description(props) {
  const navigate = useNavigate();

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
    <div className="p-0">
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
            <div className="m-3  font-Hsbl">
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
                            <td className="font-Hsbl">{row}</td>
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
      <div className="boxclear"></div>
      <div className="d-flex justify-center md:justify-end">
        <a
          className="text-sm rounded-full bg-[#0073aa] hover:bg-sky-600 backbutton"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/table`);
          }}
        >
          Back to Hebrew Table
        </a>
      </div>
      <div className="boxclear"></div>
    </div>
  );
}

export default Description;
