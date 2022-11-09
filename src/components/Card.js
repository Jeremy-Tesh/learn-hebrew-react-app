import React from "react";
import { Table } from "react-bootstrap";

import { data } from "../data/Data";

function Card(props) {
  return (
    <span className="flex flex-col mt-14 w-[680px]  min-w-[300px]  ">
      {props.show ? (
        <Table striped bordered hover className=" bg-[#ffffff] " >
          <thead>
            <tr>
              <th className="bg-head1 b" colSpan={4}>
                Performative vowel
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
