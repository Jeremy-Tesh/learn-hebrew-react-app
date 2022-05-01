import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { data } from "../data/Data";

function Card(props) {
  return (
    <span className="flex flex-col mt-14 w-[800px] min-w-[400px]  ">
      <h1 className="text-center"> Description</h1>
      {props.show ? (
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
            {data.elements[props.index].item.map((element, i) => (
              <tr key={i}>
                <td>{element.option}</td>
                <td>{element.stem}</td>
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
