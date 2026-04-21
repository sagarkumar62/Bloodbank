import React, { useRef } from "react";
import Nav from "../components/Nav";
import Hand from "../assets/Hand.png";
import Button from "../components/Button";
import DonorLeaderboard from "../components/DonorLeaderboard";
import Footer from "../components/Footer";
import Stories from "../components/Stories";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";
import { BiDonateBlood } from "react-icons/bi";
import donate from "../assets/donate.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dil from "../assets/Dil.png";

gsap.registerPlugin(ScrollTrigger);

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

  const serviceData = [
    {
      image:
        "https://i.pinimg.com/736x/46/97/cd/4697cd238531208a7783b70e42070625.jpg",
      heading: "Blood Collection",
      para: "Organizes blood donation camps and accepts voluntary walk-in donations.",
      text: "Donate",
    },
    {
      image:
        "https://i.pinimg.com/736x/9e/5d/38/9e5d38179984e523c47d93616dfa6485.jpg",
      heading: "Blood Testing",
      para: "Tests all collected blood for infectious diseases like HIV, Hepatitis B & C, Syphilis, and Malaria.",
      text: "Test",
    },
    {
      image:
        "https://i.pinimg.com/736x/57/00/5e/57005e4e1d0b4c47bc68c4ace761da35.jpg",
      heading: "Blood Distribution",
      para: "Supplies compatible blood units to hospitals, clinics, or emergency cases.",
      text: "Request",
    },
    {
      image:
        "https://i.pinimg.com/736x/2e/ed/3c/2eed3c89bd99f908417a7fed2fbeb2e4.jpg",
      heading: "Emergency Support",
      para: "Provides 24/7 emergency blood services for trauma, surgeries, or complications in childbirth.",
      text: "Emergency",
    },
  ];

  const heroRef = useRef();

  useGSAP(() => {
    const anim = gsap.to(heroRef.current, {
      y: "-300%",
      scrollTrigger: {
        trigger: heroRef.current,
        // markers:true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
      },
    });
    return () => {
      if (anim) anim.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div>
      <Nav />
      <div
        ref={heroRef}
        className="Hero absolute w-full min-h-[100vh] md:min-h-[90vh] bg-gradient-to-br from-gray-500 to-red-800 rounded-b-[8vw] md:rounded-b-[5vw] z-40"
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full">
          <div className="part1 px-4 md:pl-16 md:pt-16 w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:py-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center leading-tight md:leading-20 text-white font-medium">
              Your One Drop <br /> Can Save a Life!
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-amber-50 mt-6 sm:mt-8 md:mt-12 lg:mt-16 px-2">
              Join our mission to ensure that blood <br className="hidden sm:block" /> should be available
              when need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center sm:justify-between mt-8 sm:mt-12 md:mt-16 w-full md:pr-4 px-4">
              <Button text={"Become Donor"} />
              <Button text={"Request Blood"} />
            </div>
          </div>
          <div className="part2 hidden md:block md:w-1/2">
            <img className="w-full h-full object-cover" src={Hand} alt="" />
          </div>
        </div>
        <div className="w-full md:p-12 border-t-[1px] py-6 px-4 md:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-[2vw] border-t-amber-50">
          {processData.map((item, index) => (
            <div key={index} className="min-h-[25vh] md:h-[28vh] w-full rounded-xl md:rounded-2xl lg:rounded-4xl bg-amber-50 flex flex-col justify-evenly items-center gap-4 sm:gap-6 md:gap-12 p-4 sm:p-6 md:p-[1.5vw]">
              <div className="process-item flex flex-col items-center text-center gap-3 sm:gap-4">
                <item.icon size={32} className="sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] text-red-600" />
                <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                  className="text-sm sm:text-base md:text-lg text-gray-800"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen rounded-b-[8vw] md:rounded-b-[5vw] overflow-hidden">
        <video
          src={donate}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="w-full h-full object-cover"
        ></video>
      </section>
      <div className="min-h-screen p-2 sm:p-4">
        <div className="upper flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold">Our Services</h1>
          <p className="text-center w-full sm:w-3/4 md:w-1/2 mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            exercitationem ipsam provident quia mollitia autem odit eos
            repellat! Eius, aperiam illum!
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="container h-auto min-h-[50vh] md:h-[66vh] w-full sm:w-[48%] md:w-[23vw] p-2 md:p-4 flex flex-col items-center justify-center mb-8 md:mb-0"
            >
              <div className="lower h-full md:h-[70%] w-full bg-gradient-to-b from-gray-700 to-red-200 p-4 md:p-4 gap-4 md:gap-8 flex flex-col items-center relative rounded-2xl">
                <div className="image h-[20vw] w-[20vw] sm:h-[15vw] sm:w-[15vw] md:h-[10vw] md:w-[10vw] rounded-full bg-amber-600 border-4 border-white absolute -top-10 md:-top-20 overflow-hidden">
                  <img
                    className="w-full h-full object-cover center"
                    src={service.image} 
                    alt={service.heading}
                  />
                </div>
                <h1 className="text-white mt-16 md:mt-20 text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  {service.heading}
                </h1>
                <p className="text-white text-center text-xs sm:text-sm md:text-sm px-2">{service.para}</p>
                <Button text={service.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <DonorLeaderboard />
      <Stories />
      <Footer />
    </div>
  );
};

export default Home;

// blood drop animation
