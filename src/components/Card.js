import React from "react";
import { Table } from "react-bootstrap";

import { data } from "../data/Data";

function Card() {
  return (
    <span className="flex flex-col mt-14 w-[400px] ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={4}>Performative vowel</th>
          </tr>
          <tr>
            <th>Options</th>
            <th>Stem</th>
            <th>Clue</th>
            {/* <th rowSpan="1" className="">
              <div className="w-[90px] h-[150px] flex m-auto justify-center items-center">
                <img className="w-[80px] h-[80px]" src={content} alt="" />
              </div>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data.elements[0].item.map((element, i) => (
            <tr key={i}>
              <td>{element.option}</td>
              <td>{element.stem}</td>
              <td>{element.clue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </span>
  );
}

export default Card;
