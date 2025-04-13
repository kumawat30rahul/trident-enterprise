import React from "react";
import { Settings, Hexagon, Box, Cog, Sheet, Zap } from "lucide-react";
import TopNavbar from "../navbar/topNavbar";
import BottomNavbar from "../navbar/bottomNavbar";
import Footer from "../footer";

const ProductsPage = () => {
  const products = [
    {
      icon: <Settings className="w-12 h-12 text-red-600" />,
      title: "Mountings",
      description:
        "We produce a range of durable and versatile mountings used in various mechanical and electrical applications. Our mountings are designed to provide strong support and alignment for components in machinery, equipment, and electronic devices, ensuring stable performance under various conditions.",
      image:
        "https://img.b2bpic.net/premium-photo/interior-illuminated-factory_1048944-21361075.jpg?w=647",
    },
    {
      icon: <Hexagon className="w-12 h-12 text-red-600" />,
      title: "Brackets",
      description:
        "Our custom-made brackets are engineered to support and hold other components in place, offering reliable strength and versatility. Whether it's for structural support or securing other parts in intricate assemblies, our brackets are made to withstand heavy loads and ensure long-term functionality.",
      image:
        "https://img.b2bpic.net/premium-photo/worker-image-labor-day-photo-free-photo-man-safety-equipment-working-free-photo-two-colleagues_1283069-5548.jpg?w=647",
    },
    {
      icon: <Box className="w-12 h-12 text-red-600" />,
      title: "Terminals",
      description:
        "We manufacture high-quality sheet metal terminals for electrical applications, designed to provide secure connections with minimal resistance. Our terminals ensure efficient conductivity and long-term reliability in a wide range of electrical systems, from industrial machinery to consumer electronics.",
      image: "/api/placeholder/400/300",
    },
    {
      icon: <Cog className="w-12 h-12 text-red-600" />,
      title: "Contacts",
      description:
        "Our precision-engineered contacts are designed for seamless electrical connections. Crafted from high-grade metals and built to last, they provide reliable and consistent performance in high-demand applications, including switches, relays, and connectors.",
      image: "/api/placeholder/400/300",
    },
    {
      icon: <Sheet className="w-12 h-12 text-red-600" />,
      title: "Washers",
      description:
        "We produce a variety of washers, including flat, spring, and lock washers, for use in mechanical assemblies. Our washers help distribute loads, prevent damage to components, and maintain secure fastening in everything from automotive parts to industrial equipment.",
      image: "/api/placeholder/400/300",
    },
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: "Bushes",
      description:
        "Our range of bushes is designed to reduce friction between moving parts, ensuring smooth operation and extended lifespan of machinery and equipment. Made from durable materials, our bushes are ideal for automotive, engineering, and heavy-duty applications where precision and wear resistance are critical.",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="w-full">
      <TopNavbar />
      <BottomNavbar />

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality, custom-engineered parts designed to meet the exact
              specifications
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{product.description}</p>
                  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Components?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            We can create custom solutions tailored to your specific
            requirements. Contact us today to discuss your project needs.
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Request a Quote
          </button>
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each product is carefully manufactured to meet the highest
              standards of quality, durability, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-700">
                Custom design based on client specifications
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Prototyping
              </h3>
              <p className="text-gray-700">
                Creating prototypes for testing and approval
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Production
              </h3>
              <p className="text-gray-700">
                Manufacturing with precision machinery
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Check
              </h3>
              <p className="text-gray-700">
                Rigorous testing to ensure standards
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
