import React from "react";
import file1 from "../assets/file/ETS_Presentation_11152022.pdf";

function Resources() {
  return <div className="">
    <div className="legendbox"> 

    <div className="boxclear"></div>
    <div className="resources1">
                <iframe src={file1} width="100%" height="630px" title="Presentation" name="pdfviewer" className="borderframe"></iframe>
                <div className="boxclear"></div>
  </div>
  <div className="boxclear"></div>
  </div>
  </div>;
}

export default Resources;
