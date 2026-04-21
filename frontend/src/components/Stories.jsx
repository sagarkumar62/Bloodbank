import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // read stories from Redux store
  const storiesData = useSelector((state) => state.stories?.stories || []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === storiesData.length - 1 ? 0 : prev + 1));
  };

  const defaultStory = { id: 0, name: "", role: "", image: "", story: "", rating: 0, date: "", video: "" };
  const currentStory = storiesData.length ? storiesData[currentIndex] : defaultStory;

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from donors and recipients whose lives have been touched by the power of blood donation
          </p>
        </div>

        {/* Single Story Display with Pagination */}
        <div className="relative mb-8 sm:mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous story"
          >
            <FaChevronLeft className="text-lg sm:text-xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next story"
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>

          {/* Single Story Card */}
          <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16">
            <div
              key={currentStory.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 md:p-10 border border-gray-100 relative overflow-hidden group"
            >
              {/* Video Section */}
              <div className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl overflow-hidden shadow-xl">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={currentStory.video}
                      title={`${currentStory.name}'s Story`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-red-200 group-hover:text-red-400 transition-colors duration-300">
                <FaQuoteLeft className="text-4xl sm:text-5xl md:text-6xl opacity-50" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(currentStory.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-base sm:text-lg md:text-xl" />
                ))}
              </div>

              {/* Story Text */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 relative z-10">
                "{currentStory.story}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-red-200 flex-shrink-0">
                  <img
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl mb-1">
                    {currentStory.name}
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base md:text-lg">{currentStory.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">{currentStory.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {storiesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 w-10 h-3 sm:w-12 sm:h-4 shadow-lg"
                    : "bg-gray-400 hover:bg-gray-500 w-3 h-3 sm:w-4 sm:h-4"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Share Your Story
            </h3>
            <p className="text-red-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Have a story to share? We'd love to hear about your experience with blood donation or receiving blood.
            </p>
            <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

