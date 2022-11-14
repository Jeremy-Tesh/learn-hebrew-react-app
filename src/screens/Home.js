import React from "react";
import Img1 from "../assets/images/card1.png";
import bg from "../assets/images/bg.jpg";
function Home() {
  return (
    <div className="w-full h-auto ">
      <div>
        <div
          className="h-[500px] bg-cover object-cover w-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
      
          }}
        >
          {/* <img
              className="h-[500px] bg-gradient-to-b bg-transparent bg-['#837960'] object-cover w-full"
              src="http://cdn.designbeep.com/wp-content/uploads/2019/08/featured-image-31.jpg"
              alt="img"
            /> */}

          <div className="relative top-20 text-center">
            <p className=" text-white font-Koulen text-[11vh]">
              Hooked on Hebrew{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-5 w-[80%] ml-auto mr-auto">
        <div className="leftcol80">
          <h1 className="font-Koulen">
            Shalom and Welcome to Hooked on Hebrew!
          </h1>
          <br></br>

          <p className="font-Comfortaa justify-self-auto" >
            Most of the Bible was written in Hebrew (77.3%) and that should
            motivate you to learn this language. Here you will find creative
            learning aids to develop a greater proficiency level in reading
            biblical Hebrew. We hope you will be hooked to Hebrew and talk about
            it when you sit at home and when you walk along the road, when you
            lie down and when you get up.
          </p>
        </div>

        <div  className="rightcol20">
          <img className="w-[100%] h-auto" src={Img1} alt="img" />
        </div>

      </div>
    </div>
  );
}

export default Home;
