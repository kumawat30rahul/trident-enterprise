import React from "react";
import {
  Package,
  Shield,
  ThumbsUp,
  Box,
  Star,
  Truck,
  Award,
  Hammer,
} from "lucide-react";

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: Hammer,
      title: "Precision Engineering",
      description:
        "Every component is crafted with attention to detail, ensuring reliability and performance.",
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description:
        "Our quality management system ensures consistent excellence in all manufacturing processes.",
    },
    {
      icon: ThumbsUp,
      title: "Long-term Partnerships",
      description:
        "We focus on building strong relationships with clients through trust and reliability.",
    },
    {
      icon: Package,
      title: "Diverse Material Expertise",
      description:
        "Experience working with a wide range of materials from standard steels to specialized alloys.",
    },
  ];

  const stats = [
    {
      icon: Box,
      number: "1000",
      label: "Distinct Components",
    },
    {
      icon: Star,
      number: "40",
      label: "Years of Experience",
    },
    {
      icon: Truck,
      number: "50",
      label: "Satisfied Clients",
    },
    {
      icon: Award,
      number: "100",
      label: "Positive Reviews",
    },
  ];

  return (
    <div className="w-full bg-gray-100 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 text-lg font-medium">
            OUR STRENGTHS
          </span>
          <h2 className="text-gray-900 text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-700 text-lg">
            Our company is dedicated to manufacturing high-quality brackets,
            washers, bushes, mountings, terminals, and more. We ensure each
            product meets rigorous standards for durability, reliability, and
            precision, providing you with components that you can trust for any
            application.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-md"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-gray-900 text-xl font-bold mt-4">
                  {strength.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-900 text-2xl font-bold">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
