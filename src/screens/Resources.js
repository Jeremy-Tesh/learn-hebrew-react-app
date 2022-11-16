import React from "react";
import file1 from "../assets/file/ETS_Presentation_Nov_15.pdf";
import { resourceImages } from '../data/ResourceImages';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Resources() {
  return <div className="">
    <div className="legendbox"> 

      <div className="my-10 mx-4 md:mx-8">
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}
        >
          {resourceImages.map(resource => <div>
            <img src={resource.img} />
          </div>)}
        </Carousel>
      </div>

      {/* <div className="boxclear"></div>
      <div className="resources1">
        <iframe src={`${file1}#view=fitH`} height="100%" width="100%" title="Presentation" className="pdf-viewer"></iframe>
        <div className="boxclear"></div>
      </div>
      <div className="boxclear"></div> */}
    </div>
  </div>;
}

export default Resources;
