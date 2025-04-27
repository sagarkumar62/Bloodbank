import React, { useRef, useState } from "react";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "Donate", "Request", "About"];
  const menuref = useRef();

  const menuHandler = () => {
    setMenuOpen((prevState) => !prevState);
    const tl = gsap.timeline();

    if (!menuOpen) {
      tl.to(menuref.current, {
        right: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      tl.from(menuref.current.querySelectorAll("h4"), {
        opacity: 0,
        x: 100,
        stagger: 0.15,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuref.current, {
        right: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  return (
    <div>
      <nav className="w-full py-4 px-6 bg-[#7F1D1D] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="heart-rate">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100px"
              height="40px"
              viewBox="0 0 150 73"
              enableBackground="new 0 0 150 73"
              xmlSpace="preserve"
            >
              <polyline
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeMiterlimit="10"
                points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
              />
            </svg>
            <div class="fade-in"></div>

            <div class="fade-out"></div>
          </div>
        </div>

        {/* Desktop and Tablet Menu */}
        <div className="hidden md:flex gap-8 items-center text-white">
          {menuItems.map((item, idx) => (
            <h4 key={idx} className="font-medium cursor-pointer hover:underline">
              {item}
            </h4>
          ))}
          <Button text={"Register"} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <HiX className="text-3xl text-white cursor-pointer" onClick={menuHandler} />
          ) : (
            <HiMenu className="text-3xl text-white cursor-pointer" onClick={menuHandler} />
          )}
        </div>
      </nav>

      {/* Mobile Menu Items */}
      <div
        ref={menuref}
        className="fixed top-16 right-[-100%] w-full h-[calc(100vh-64px)] bg-[#7F1D1D] text-white flex flex-col md:hidden transition-all duration-500 ease-in-out z-50"
      >
        <div className="flex flex-col px-6 py-8 gap-4">
          {menuItems.map((item, idx) => (
            <h4
              key={idx}
              className="font-medium cursor-pointer text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </h4>
          ))}
          <div className="w-full flex justify-center pt-4">
            <Button text={"Register"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
