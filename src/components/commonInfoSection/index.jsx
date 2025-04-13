import React from "react";

// This is a modified version of your InfoSection component that includes the founder section
const InfoSection = ({
  imagePosition = "left", // 'left' or 'right'
  subtitle = "OUR EXPERTISE",
  title = "Leading in Manufacturing Excellence",
  description = "Our company stands at the forefront of the manufacturing industry, delivering top-notch brackets, washers, bushes, mountings, terminals, and more. We take pride in our innovative approach and commitment to quality, ensuring that each component is crafted with precision for your specific needs.",
  buttonText = "Discover More",
  overlayTitle = "Quality Components for Every Need",
  stats = [
    {
      number: "50",
      suffix: "+",
      label: "Customers",
    },
    {
      number: "1000",
      suffix: "+",
      label: "Products",
    },
    {
      number: "40",
      suffix: "+",
      label: "Years of experience",
    },
    {
      number: "100",
      suffix: "+",
      label: "Positive reviews",
    },
  ],
  imageLink,
  buttonRequired = true,
  showFounder = false,
}) => {
  const contentOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1";
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <div className="w-full bg-gray-900 px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className={`flex-1 relative w-full ${imageOrder}`}>
          <img
            src={imageLink}
            alt="Manufacturing excellence"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Overlay Card */}
          {/* <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl max-w-sm">
            <h3 className="text-gray-900 text-2xl font-bold">{overlayTitle}</h3>
          </div> */}
        </div>

        {/* Content Section */}
        <div className={`flex-1 ${contentOrder}`}>
          <span className="text-blue-400 text-lg font-medium">{subtitle}</span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{description}</p>

          {showFounder && (
            <div className="mb-8 bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-white text-xl font-bold mb-3">
                Sanjay Dahisarkar — Founder
              </h3>
              <p className="text-gray-400">
                Sanjay Dahisarkar is the visionary founder of Gurukripa
                Industries, established in 1985. With a passion for precision
                engineering and a relentless commitment to quality, he set out
                to create a company that would not only deliver exceptional
                sheet metal components but also build long-lasting partnerships
                with clients. His leadership, combined with a deep understanding
                of client needs, has been the driving force behind Gurukripa
                Industries' success.
              </p>
            </div>
          )}

          {buttonRequired && (
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              {buttonText}
            </button>
          )}

          {/* Stats */}
          {imagePosition === "left" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-800">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start "
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-blue-400 text-4xl font-bold">
                      {stat.number}
                    </span>
                    <span className="text-blue-400 text-4xl font-bold">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-2 min-w-max text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
