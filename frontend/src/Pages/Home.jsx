import React from "react";
import Nav from "../components/Nav";
import Hand from "../assets/Hand.png";
import Button from "../components/Button";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";
import { BiDonateBlood } from "react-icons/bi";



const Home = () => {
  const processData = [
    {
      icon: IoPersonAddOutline,
      title: "Register",
      desc: "Sign up to become a <br /> donor or request blood",
    },
    {
      icon: FaHeartPulse,
      title: "Screening",
      desc: "Checking your <br /> health to proceed.",
    },
    {
      icon: BiDonateBlood,
      title: "Donate",
      desc: "Keep calm and <br /> have patience.",
    },
  ];

  return (
    <div>
      <Nav />
      <div className="Hero w-full bg-gradient-to-br from-gray-500 to-red-800 rounded-b-[5vw]">
        <div className="  flex justify-between w-full h-screen">
          <div className="part1 pl-16 pt-16 w-1/2">
            <h1 className="text-8xl leading-32 text-white font-medium">
              Your One Drop <br /> Can Save a Life!
            </h1>
            <p className="text-2xl text-amber-50 mt-16">
              Join our mission to ensure that blood <br /> should be available
              when need
            </p>
            <div className="flex gap-8 items-center justify-between mt-16 w-full pr-4">
              <Button text={"Become a Donor"} />
              <Button text={"Request Blood"} />
            </div>
          </div>
          <div className="part2">
            <img className="w-full h-full object-cover" src={Hand} alt="" />
          </div>
        </div>
        <div className="w-full p-12 border-t-[1px] border-t-amber-50">
          <div className="h-[28vh] rounded-4xl bg-amber-50 flex justify-evenly items-center  gap-12 p-8">
            {processData.map((item, index) => (
              <div
                key={index}
                className="process-item flex flex-col items-center text-center gap-4"
              >
                <item.icon size={40} className="text-red-600" />
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                  className="text-lg text-gray-800"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
