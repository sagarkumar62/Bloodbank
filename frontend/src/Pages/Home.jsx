import React from "react";
import logo from "../assets/logo.png";
import Nav from "../components/Nav";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black px-5">
      <Nav />
      <section className="w-full mt-20 px-5 flex">
        <div className="part1">
          <div className="heading">
            <h1 className="text-[#fe6058] text-9xl font-semibold ">
              Donate Blood,
            </h1>
            <h1 className="text-[#fe6058] text-9xl font-semibold ">Save Lives</h1>
          </div>
          <div className="para mt-12 mb-12">
            <p className="text-white">
              Your one donation can save three lives.
            </p>
            <p className="text-white">Register now and be a hero.</p>
          </div>
          <Button text={"Donate Now"} />
        </div>
        <div className="part2 border border-[#fe6058]">
          
        </div>
      </section>
    </div>
  );
};

export default Home;
