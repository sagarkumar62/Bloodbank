import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DonorLeaderboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPageMobile = 1;
  const itemsPerPageDesktop = 3;

  // Read donor data from Redux store
  const donorData = useSelector((state) => state.donor?.donors || []);

  const getRankIcon = (rank) => {
    if (rank === 1) {
      return <FaTrophy className="text-yellow-400 text-2xl sm:text-3xl" />;
    } else if (rank === 2) {
      return <FaMedal className="text-gray-300 text-2xl sm:text-3xl" />;
    } else if (rank === 3) {
      return <FaAward className="text-amber-600 text-2xl sm:text-3xl" />;
    }
    return (
      <span className="text-gray-500 font-bold text-lg sm:text-xl w-6 sm:w-8 flex items-center justify-center">
        {rank}
      </span>
    );
  };

  const getRankBg = (rank) => {
    if (rank === 1) {
      return "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-400";
    } else if (rank === 2) {
      return "bg-gradient-to-r from-gray-300/20 to-gray-400/20 border-gray-300";
    } else if (rank === 3) {
      return "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600";
    }
    return "bg-gradient-to-r from-gray-700/20 to-gray-800/20 border-gray-600";
  };

  // Use different items per page for mobile and desktop
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset index when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(donorData.length / itemsPerPage);
  
  const currentDonors = donorData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(donorData.length - itemsPerPage, prev + itemsPerPage)
    );
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < donorData.length;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold mb-4 sm:mb-6 md:mb-8 text-gray-800">
          Donor Leaderboard
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-10 sm:mb-14 md:mb-16 px-4 max-w-3xl mx-auto">
          Recognizing our top donors who have made a significant impact in saving lives
        </p>

        <div className="w-full relative py-8 sm:py-10 md:py-12 overflow-visible">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 z-20 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full p-3 sm:p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 ${
              canGoPrevious
                ? "opacity-100 hover:scale-110 active:scale-95"
                : "opacity-40 cursor-not-allowed"
            }`}
            aria-label="Previous"
          >
            <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-8 z-20 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full p-3 sm:p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 ${
              canGoNext
                ? "opacity-100 hover:scale-110 active:scale-95"
                : "opacity-40 cursor-not-allowed"
            }`}
            aria-label="Next"
          >
            <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
          </button>

          {/* Mobile View - Single Card with Pagination */}
          <div className="block sm:hidden">
            <div className="flex justify-center mb-6">
              {currentDonors.map((donor) => (
                <div
                  key={donor.id}
                  className={`${getRankBg(
                    donor.rank
                  )} border-2 rounded-2xl p-6 shadow-xl flex flex-row items-center gap-5 relative group w-full max-w-sm`}
                >
                  {/* Rank Icon - Top Right */}
                  <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-transform duration-300 z-10">
                    {getRankIcon(donor.rank)}
                  </div>
                  
                  {/* Left Side - Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={donor.image}
                        alt={donor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="flex-1 flex flex-col justify-center items-start text-left min-w-0 pr-2">
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight truncate w-full">
                      {donor.name}
                    </h3>
                    
                    <div className="flex flex-col gap-2 mb-3 w-full">
                      <span className="bg-red-600/70 hover:bg-red-600 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg transition-all duration-300 w-fit">
                        {donor.bloodType}
                      </span>
                      <p className="text-gray-300 text-sm flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                        Last: {donor.lastDonation}
                      </p>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <div className="text-white font-bold text-3xl drop-shadow-lg">
                        {donor.donations}
                      </div>
                      <p className="text-gray-200 text-sm font-medium">
                        Donations
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 ${
                  canGoPrevious
                    ? "opacity-100 active:scale-95"
                    : "opacity-40 cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <FaChevronLeft className="text-lg" />
              </button>

              <span className="text-gray-600 text-sm font-medium min-w-[80px] text-center">
                Page {Math.floor(currentIndex / itemsPerPage) + 1} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 ${
                  canGoNext
                    ? "opacity-100 active:scale-95"
                    : "opacity-40 cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>

            {/* Mobile Page Indicators */}
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageStartIndex = index * itemsPerPage;
                const isActive =
                  currentIndex >= pageStartIndex &&
                  currentIndex < pageStartIndex + itemsPerPage;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(pageStartIndex)}
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 w-8 h-3 shadow-lg"
                        : "bg-gray-400 hover:bg-gray-500 w-3 h-3"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Desktop View - 3 Cards */}
          <div className="hidden sm:flex gap-4 md:gap-6 justify-center items-center py-6 pb-12 flex-wrap">
            {currentDonors.map((donor) => (
              <div key={donor.id} className="py-4 px-2">
                <div
                  className={`${getRankBg(
                    donor.rank
                  )} border-2 rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-[300px] sm:w-[320px] md:w-[350px] flex flex-row items-center gap-4 sm:gap-5 relative group`}
                >
                {/* Rank Icon - Top Right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 transform group-hover:scale-110 transition-transform duration-300 z-10">
                  {getRankIcon(donor.rank)}
                </div>
                
                {/* Left Side - Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={donor.image}
                      alt={donor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 flex flex-col justify-center items-start text-left min-w-0 pr-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight truncate w-full">
                    {donor.name}
                  </h3>
                  
                  <div className="flex flex-col gap-2 mb-2 sm:mb-3 w-full">
                    <span className="bg-red-600/70 hover:bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg transition-all duration-300 w-fit">
                      {donor.bloodType}
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Last: {donor.lastDonation}
                    </p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">
                      {donor.donations}
                    </div>
                    <p className="text-gray-200 text-xs sm:text-sm font-medium">
                      Donations
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          {/* Page Indicators - Hidden on mobile */}
          <div className="hidden sm:flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageStartIndex = index * itemsPerPage;
              const isActive =
                currentIndex >= pageStartIndex &&
                currentIndex < pageStartIndex + itemsPerPage;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(pageStartIndex)}
                  className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    isActive
                      ? "bg-red-600 w-10 h-3 sm:w-12 sm:h-4 shadow-lg"
                      : "bg-gray-400 hover:bg-gray-500 w-3 h-3 sm:w-4 sm:h-4"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            * Rankings are based on total number of donations. Thank you to all our donors!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorLeaderboard;

