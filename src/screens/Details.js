import React from "react";
import { useParams } from "react-router-dom";
import Box from "../components/Box";
import Card from "../components/Card";
import Description from "../components/Description";
import { useNavigate } from "react-router-dom";

function Details() {
  const { index } = useParams();
  const navigate = useNavigate();

  return (
    <div className="pt-11 fulldescbox">
      <div className="w-auto mr-5 grid m-2 ">
        <div className="w-auto ml-2">
          <div className="flex flex-wrap flex-col md:flex-row">
            <Card index={index} show={true} isDescription={index <= 9} />
            <div className="flex flex-col w-58 ml-auto mr-auto md:ml-5 lg:ml-5">
              <Box index={index} />
            </div> 
          </div>

          {index > 9 
            ? <Description index={index} />
            : <div className="d-flex justify-center pt-10">
                <a
                  className="text-sm rounded-full bg-[#0073aa] hover:bg-sky-600 backbutton"
                  href="/"
                  onClick={e => {
                      e.preventDefault();
                      navigate(`/table`);
                    }
                  }
                >
                  Back to Hebrew Table
                </a>
                
              </div>}

        </div>
      </div>
    </div>
  );
}

export default Details;
