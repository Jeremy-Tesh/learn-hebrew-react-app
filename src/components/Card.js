import React from "react";
import { Table } from "react-bootstrap";
import content from "../components/1.JPG";

function Card() {
  return (
    <span className="flex flex-col ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={4}>Performative vowel</th>
          </tr>
          <tr>
            <th>Options</th>
            <th>Stem</th>
            <th>Clue</th>
            <th>fdhdfh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D</td>
            <td>Piel</td>
            <td>V1-Patach</td>
            <td rowSpan="4" className="">
              <div className="w-[90px] h-[150px] flex m-auto justify-center items-center">
                <img className="w-[80px] h-[80px]" src={content} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Dp</td>
            <td>Pual</td>
            <td>V1-Patach</td>
          </tr>
          <tr>
            <td>Q</td>
            <td>Qal</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>H</td>
            <td>Hifil</td>
            <td>jhkdhkjhkhkhgkugugjg jgjhgjhg</td>
          </tr>
        </tbody>
      </Table>
    </span>
  );
}

export default Card;
