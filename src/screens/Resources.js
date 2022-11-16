import React from "react";
import file1 from "../assets/file/ETS_Presentation_Nov_15.pdf";

function Resources() {
  return <div className="">
    <div className="legendbox"> 

    <div className="boxclear"></div>
    <div className="resources1">
      <iframe src={file1} title="Presentation" name="pdfviewer" className="pdf-viewer"></iframe>
      <div className="boxclear"></div>
    </div>
  <div className="boxclear"></div>
  </div>
  </div>;
}

export default Resources;
