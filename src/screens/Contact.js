import React from "react";
import profile from "../assets/images/profile.png";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import bg from "../assets/images/bg2.svg";

function Contact() {
  return (
    <div className="w-screen flex font-Comfortaa">
      <div
        className=" flex-col justify-between "
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      >
        <div className="p-[30px] w-full border-solid border-[1px] flex flex-wrap justify-center">
          <div className="card-body w-auto max-w-[300px] min-w-[70px]  h-auto">
            <div className="avatar_img">
              <img
                src={profile}
                className="  border-1 rounded-full "
                alt="profile"
              />
            </div>
            <h5 className="mt-[20px]">Pastor Melak alemayew</h5>
            <p className="card-text">
              Adventist University of Africa, Nairobi, Kenya
              <br />
              <span className="phone">254724416340</span>
            </p>
          </div>
          <div className="w-auto max-w-[600px] flex h-full flex-col text-center">
            <div className="p-5 font-extralight ">
              <h2 className="">
                "For Ezra had set his heart to study the Law of the LORD, and to
                do it and to teach his statutes and rules in Israel."
              </h2>
              <p>Ezra 7:10</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 bottom-0  p-10 flex-row flex-wrap justify-center  ">
          <div className="p-[30px] w-1/2 max-w-[400px] min-w-[300px] rounded-lg bg-white  m-4 border-solid border-[1px] border-[#9dcbe0] hover:shadow-2xl flex items-center justify-center flex-col">
            {/* <Phone style={{ margin: "15px" }} /> */}
            <img className="m-[15px]" src={phone} alt="phone" />
            <h3>Reach us by Phone</h3>
            <p>Give us a call , we endeavor to answer all</p>
            <span className="phone">call: 254724416340</span>
          </div>
          <div className="p-[30px] m-4 w-1/2 max-w-[400px] min-w-[300px] rounded-lg bg-white    border-solid border-[1px] border-[#9dcbe0] hover:shadow-2xl flex items-center justify-center flex-col">
            {/* <Email style={{ margin: "15px" }} /> */}
            <img className="m-[15px]" src={email} alt="phone" />
            <h3>Have questions?</h3>
            <p>Email us anytime, we endeavor to answer all</p>
            <span className="email">email: tsegawm@aua.ac.ke</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
