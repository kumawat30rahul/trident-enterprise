import React from "react";
import { Settings, Hexagon, Box, Cog, Sheet, Zap } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <Cog className="w-12 h-12 text-blue-400" />,
      title: "Mountings",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "We produce durable and versatile mountings designed to provide strong support and alignment for components in machinery, equipment, and electronic devices.",
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-400" />,
      title: "Brackets",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "Our custom-made brackets are engineered to support and hold components in place, offering reliable strength for structural support in intricate assemblies.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Terminals",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "We manufacture high-quality sheet metal terminals for electrical applications, designed to provide secure connections with minimal resistance.",
    },
    {
      icon: <Sheet className="w-12 h-12 text-blue-400" />,
      title: "Contacts",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "Our precision-engineered contacts are designed for seamless electrical connections, crafted from high-grade metals for reliable performance in switches, relays, and connectors.",
    },
    {
      icon: <Hexagon className="w-12 h-12 text-blue-400" />,
      title: "Washers",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "We produce various washers including flat, spring, and lock washers that help distribute loads, prevent damage to components, and maintain secure fastening.",
    },
    {
      icon: <Box className="w-12 h-12 text-blue-400" />,
      title: "Bushes",
      image:
        "https://www.rtprototype.com/wp-content/uploads/2023/11/L-shaped-bracket-image.jpg",
      description:
        "Our range of bushes is designed to reduce friction between moving parts, ensuring smooth operation and extended lifespan of machinery and equipment.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-red-600 mb-4 font-bold">
            OUR SPECIALIZED PRODUCTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delivering Quality Manufacturing
            <br />
            Solutions Worldwide
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700">
            At our company, we are dedicated to providing top-notch
            manufacturing solutions, including brackets, washers, bushes,
            mountings, terminals, and more, to support your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-6 rounded"
              />
              <div className="flex justify-center mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
