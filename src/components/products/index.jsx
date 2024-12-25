import React from "react";
import { Settings, Hexagon, Box, Cog, Sheet, Zap } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <Settings className="w-12 h-12 text-blue-400" />,
      title: "Custom Brackets",
      description:
        "We specialize in manufacturing high-quality brackets tailored to your specific needs, ensuring durability and precision.",
    },
    {
      icon: <Hexagon className="w-12 h-12 text-blue-400" />,
      title: "Durable Washers",
      description:
        "Our washers are designed to withstand extreme conditions, providing reliable performance in any application.",
    },
    {
      icon: <Box className="w-12 h-12 text-blue-400" />,
      title: "Precision Bushes",
      description:
        "Our bushes are engineered for accuracy and longevity, perfect for a wide range of industrial uses.",
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-400" />,
      title: "Reliable Mountings",
      description:
        "We offer robust mountings that provide stable support and secure connections for various machinery.",
    },
    {
      icon: <Sheet className="w-12 h-12 text-blue-400" />,
      title: "Sheet Metal Terminals",
      description:
        "Precision-crafted sheet metal terminals designed for optimal electrical applications and superior conductivity.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Electrical Connectors",
      description:
        "Engineered for seamless electrical connections, ensuring reliable and efficient power transmission.",
    },
  ];

  return (
    <div className="bg-[#1a1f2e] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-blue-400 mb-4 font-bold">
            OUR SPECIALIZED PRODUCTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Delivering Quality Manufacturing
            <br />
            Solutions Worldwide
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400">
            At our company, we are dedicated to providing top-notch
            manufacturing solutions, including brackets, washers, bushes,
            mountings, terminals, and more, to support your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#1e2432] p-8 rounded-lg text-center hover:bg-[#252a3a] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{product.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {product.title}
              </h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
