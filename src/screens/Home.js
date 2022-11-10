import React from "react";
import Img1 from "../assets/images/card1.png";
function Home() {
  return (
    <div className="w-full h-auto ">
      <div
        className="h-[500px] bg-cover object-cover w-full"
        style={{
          backgroundImage:
            "url('http://cdn.designbeep.com/wp-content/uploads/2019/08/featured-image-31.jpg')",
          backgroundPosition: "cover",
        }}
      >
        {/* <img
            className="h-[500px] bg-gradient-to-b bg-transparent bg-['#837960'] object-cover w-full"
            src="http://cdn.designbeep.com/wp-content/uploads/2019/08/featured-image-31.jpg"
            alt="img"
          /> */}
        <div className="w-screen relative top-20 text-center">
          <h1 className="r text-white font-Koulen text-9xl">
            Hooked on Hebrew{" "}
          </h1>
        </div>
      </div>

      <div className="flex p-5">
        <div>
          <h1 className="font-Koulen">
            Shalom and Welcome to Hooked on Hebrew!
          </h1>
          <br></br>

          <p className="font-Comfortaa">
            Here you will find creative learning aids to develop a greater
            proficiency level in reading biblical Hebrew. Most of the Bible was
            written in Hebrew (77.3%) and that should motivate you to learn this
            language. Though you may think learning biblical Hebrew is complex,
            this site's resources might help you ace your understanding and have
            a smooth safari on the rough road of this ancient language. We hope
            you will be hooked to Hebrew and talk about it when you sit at home
            and when you walk along the road, when you lie down and when you get
            up. Blessings,
          </p>
        </div>
        <img className="w-[20%] h-[20%]" src={Img1} alt="img" />
      </div>
    </div>
  );
}

export default Home;
