import React, { useState } from "react";
import down from "../assets/icons/dow.png";
import collapse from "../assets/icons/right.png";

function Description() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-1 ">
      <div
        className={`border-1 border-[#c2c2c2]  ${clicked ? "" : "h-[38px]"} `}
        onClick={() => setClicked(!clicked)}
      >
        <div className="flex items-center  bg-[#ededed]">
          <img
            className="w-[20px] h-[20px] mx-2  "
            src={clicked ? down : collapse}
            alt=""
          />
          <p className="m-2">D-Piel</p>
        </div>

        <br></br>
        {clicked ? (
          <div className="m-3">
            <p>
              Esse ut magna aliqua ad exercitation ad reprehenderit amet
              consequat adipisicing est est tempor id. Dolor eu consectetur esse
              excepteur magna laborum anim dolor. Nulla commodo nisi minim
              exercitation proident mollit id occaecat mollit ipsum cillum. Sit
              pariatur esse sint dolor nulla proident ipsum exercitation et sit
              voluptate dolor ipsum. Adipisicing veniam esse officia aliquip
              anim pariatur enim magna. Sit ut consequat ut elit dolor. Ullamco
              non culpa commodo commodo voluptate. Mollit non Lorem nostrud
              consectetur eu labore minim labore. Pariatur est adipisicing velit
              nisi exercitation duis ullamco sit sit incididunt eu enim id esse.
              Adipisicing esse nostrud sint exercitation fugiat ad pariatur sit
              amet Lorem veniam commodo. Do sunt dolore sint occaecat do nisi
              esse ut enim enim sint. Nisi cillum velit ut anim commodo elit
              commodo minim mollit occaecat nisi veniam veniam velit. Mollit
              consequat sit voluptate laborum.
            </p>
            <a>More Examples</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Description;
