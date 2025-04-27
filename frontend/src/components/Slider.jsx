import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoPersonAddOutline } from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";



export default function Slider() {
  return (
    <div className="w-full h-[400px]"> {/* Outer container with fixed height */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full" // important: Swiper should be full height
      >
        <SwiperSlide>
          <div className="text-red-800 flex flex-col items-center justify-center h-full text-center gap-4"> {/* Inner div */}
            <IoPersonAddOutline className="text-9xl " />
            <h1 className="text-2xl font-bold">1. Register</h1>
            <p>Sign up to become a <br /> donor or request blood.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="text-red-800 flex flex-col items-center justify-center h-full text-center gap-4"> {/* Inner div */}
            <LuHeartPulse className="text-9xl" />
            <h1 className="text-2xl font-bold">2. Health Screening</h1>
            <p>A simple check-up to ensure <br /> you’re ready to donate.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-red-800 flex flex-col items-center justify-center h-full text-center gap-4"> {/* Inner div */}
            <BiDonateHeart className="text-9xl" />
            <h1 className="text-2xl font-bold">3. Donate</h1>
            <p>Be a reason of <br /> many smiles.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
