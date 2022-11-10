import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { data } from "../data/Data";

function Card(props) {
  let navigate = useNavigate();
  const { index, isViewDetails, setIsShown } = props;
  console.log(isViewDetails);
  return (
    <span className="flex flex-col mt-14 w-[680px]  min-w-[300px]  ">
      {props.show ? (
        <Table striped bordered hover className="bg-[#ffffff] shadow-xl" >
          <thead>
            <tr>
              <th className="bg-head1 b" colSpan={4}>
                <div className="flex items-center justify-between">
                  <span>Performative vowel</span>
                  {isViewDetails && <div className="flex items-center">
                    <button
                      className="text-sm rounded-full bg-[#0073aa] h-7 px-3 mr-2"
                      onClick={() => navigate(`/details/${index}`)}
                    >
                      View Details
                    </button>

                    <button
                      className="text-sm rounded-full bg-[#fefefe] text-[#0073aa] h-7 w-7 p-2"
                      onClick={() => setIsShown(false)}
                    >
                      <svg viewPort="0 0 12 12" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" 
                          x2="11" y2="1" 
                          stroke="black" 
                          stroke-width="2"/>
                        <line x1="1" y1="1" 
                          x2="11" y2="11" 
                          stroke="black" 
                          stroke-width="2"/>
                      </svg>
                    </button>
                  </div>}
                </div>
              </th>
            </tr>
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
          </thead>
          <tbody>
            {data.elements[props.index].item.map((element, i) => (
              <tr key={i}>
                <td>{element.option}</td>
                <td>
                  {element.congruency ? element.congruency : element.stem}
                </td>
                <td>{element.clue}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <span></span>
      )}
    </span>
  );
}

export default Card;
