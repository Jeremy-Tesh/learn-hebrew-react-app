import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { data } from "../data/Data";

function Card(props) {
  const navigate = useNavigate();
  const { index, isViewDetails, setIsShown, isDescription } = props;

  return (
    <span className="flex-1 flex-col">
      {props.show ? (
        <Table striped bordered hover className="bg-[#ffffff] shadow-xl">
          <thead>
            <tr>
              <th className="bg-head1 b" colSpan={4}>
                <div className="flex items-center justify-between">
                  <span className="tableTitle">{!isDescription ? 'Preformative vowel' : data.elements[index].item[0].title }</span>
                  {isViewDetails && (
                    <div className="flex items-center">
                      {!isDescription  && <button
                        className="text-sm rounded-full bg-[#0073aa] h-9 px-3 mr-2 hover:bg-sky-600 hover:text-[yellow]"
                        onClick={() => navigate(`/details/${index}`)}
                      >
                        View Details
                      </button>}
                      

                      <button
                        className="text-sm rounded-full bg-[#fefefe] text-[#0073aa] h-7 w-7 p-2"
                        onClick={() => setIsShown(false)}
                      >
                        <svg
                          viewPort="0 0 12 12"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="1"
                            y1="11"
                            x2="11"
                            y2="1"
                            stroke="black"
                            stroke-width="2"
                          />
                          <line
                            x1="1"
                            y1="1"
                            x2="11"
                            y2="11"
                            stroke="black"
                            stroke-width="2"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </th>
            </tr>
            {!isDescription ? (
                <tr>
                  <th className="b">Options</th>
                  <th className="b">Stem</th>
                  <th className="b">Clue</th>
                  {/* <th rowSpan="1" className="">
                  <div className="w-[90px] h-[150px] flex m-auto justify-center items-center">
                    <img className="w-[80px] h-[80px]" src={content} alt="" />
                  </div>
                </th> */}
                </tr>
              )
              : ''}
          </thead>
          <tbody>
            {!isDescription ?
              data.elements[props.index].item.map((element, i) => (
                <tr key={i}>
                  <td>{element.option}</td>
                  <td>
                    {element.congruency ? element.congruency : element.stem}
                  </td>
                  <td>{element.clue}</td>
                </tr>
              ))
            : <tr>
                <td colSpan={4}>
                  {data.elements[index].item[0].description}
                </td>
              </tr>}
          </tbody>
        </Table>
      ) : (
        <span></span>
      )}
    </span>
  );
}

export default Card;
