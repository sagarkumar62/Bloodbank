import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import donate from "../assets/donate.mp4";
import Heart from "../assets/Dil.png";
import Remote from "../assets/Remote.png";
import AB from "../assets/AB.png";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black/0 overflow-x-hidden overflow-y-auto ">
      <Nav />
      <section className="w-full h-[100vh] px-5 relative flex justify-between items-center ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={donate} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <div className="part1 relative z-20">
          <div className="heading">
            <h1 className="text-[#860c05] text-6xl md:text-9xl font-semibold">
              Donate Blood,
            </h1>
            <h1 className="text-[#860c05] text-6xl md:text-9xl font-semibold">
              Save Lives
            </h1>
          </div>
          <div className="para mt-12 mb-12">
            <p className="text-white text-lg">
              Your one donation can save three lives.
            </p>
            <p className="text-white text-lg">Register now and be a hero.</p>
          </div>
          <Button text={"Donate Now"} />
        </div>
      </section>
      <section>
        <Slider />
      </section>
      <section className="w-screen px-10 mt-16 mb-16 flex justify-between">
        <div
          className="part1 w-[45%] h-[30vh] flex items-center justify-between px-10"
          style={{
            borderRadius: "59px",
            background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
            boxShadow: `
      24px 24px 48px #929292,
      -24px -24px 48px #ffffff,
      inset 24px 24px 48px #929292,
      inset -24px -24px 48px #ffffff
    `,
          }}
        >
          <img
            src={Heart}
            alt="Heart Illustration"
            className="h-full object-contain"
          />
          <div className="flex flex-col justify-center text-center pr-10 gap-2">
            <h1 className="text-5xl">
              Who Can <br /> Donate ?
            </h1>
            <div className="h-full "></div>
            <p>
              Learn about byling <br /> eligibility rebrenats
            </p>
          </div>
        </div>

        <div
          className="part2 w-[45%] h-[30vh] bg-white rounded-4xl flex items-center justify-between px-30"
          style={{
            borderRadius: "59px",
            background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
            boxShadow: `
            24px 24px 48px #929292,
            -24px -24px 48px #ffffff,
            inset 24px 24px 48px #929292,
            inset -24px -24px 48px #ffffff
          `,
          }}
        >
          <div className="part1 text-center">
            <h1 className="text-5xl">1500+</h1>
            <h5 className="leading-4">
              Registered <br /> Donors
            </h5>
          </div>
          <div className="part1 text-center">
            <h1 className="text-5xl">1200</h1>
            <h5 className="leading-4">
              Blood <br /> Requests
            </h5>
          </div>
          <div className="part1 text-center ">
            <h1 className="text-5xl">900</h1>
            <h5 className="leading-4">
              Successful <br /> Donations
            </h5>
          </div>
        </div>
      </section>
      <section className="w-screen px-10 mt-16 mb-16 flex justify-between">
        <div
          className="part1 w-[45%] h-[65vh] p-10 flex flex-col gap-5 rounded-4xl
         "
          style={{
            borderRadius: "59px",
            background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
            boxShadow: `
            24px 24px 48px #929292,
            -24px -24px 48px #ffffff,
            inset 24px 24px 48px #929292,
            inset -24px -24px 48px #ffffff
          `,
          }}
        >
          <h1 className="text-2xl font-bold mt-5">Registered as a Donor</h1>
          <div className="w-full flex flex-col gap-3">
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Full Name"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Age"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Blood Group"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Location"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Phone Number"
            />
          </div>
          <Button text={"Submit"} />
        </div>
        <div
          className="part2 w-[45%] h-[65vh] px-10 flex flex-col rounded-4xl "
          style={{
            borderRadius: "59px",
            background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
            boxShadow: `
            24px 24px 48px #929292,
            -24px -24px 48px #ffffff,
            inset 24px 24px 48px #929292,
            inset -24px -24px 48px #ffffff
          `,
          }}
        >
          <img
            src={Remote}
            alt="Heart Illustration"
            className=" object-contain transform rotate-90 h-[30vh]  bg-red"
          />
          <h1 className="text-2xl font-bold mb-5">Request for blood</h1>
          <div className="w-full flex flex-col gap-3">
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Full Name"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" Reason"
            />
            <input
              className="border w-3/4 rounded-[10px] h-8 bg-gray-300"
              type="text"
              placeholder=" User"
            />
          </div>
        </div>
      </section>
      <section className="w-screen px-10 mt-16 mb-16 flex justify-between">
        <div
          className="w-full h-[30vh] flex items-center px-10"
          style={{
            borderRadius: "59px",
            background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
            boxShadow: `
          24px 24px 48px #929292,
          -24px -24px 48px #ffffff,
          inset 24px 24px 48px #929292,
          inset -24px -24px 48px #ffffff
        `,
          }}
        >
          <img
            src={AB}
            alt="Heart Illustration"
            className=" object-contain transform h-[20vh] bg-red"
          />
          <div>
          <h1 className="text-3xl font-bold">About Us</h1>
          <p>Our mission provides connecting tonors <br /> and recipient's to improve access to blood.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
