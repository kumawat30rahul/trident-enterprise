import React from "react";
import {
  Package,
  Shield,
  ThumbsUp,
  //   Tool,
  Box,
  Star,
  Truck,
  Award,
  Hammer,
} from "lucide-react";

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: Package,
      title: "Durable Materials",
    },
    {
      icon: Shield,
      title: "Reliable Protection",
    },
    {
      icon: ThumbsUp,
      title: "Superior Quality",
    },
    {
      icon: Hammer,
      title: "Precision Engineering",
    },
  ];

  const stats = [
    {
      icon: Box,
      number: "7500",
      label: "Products Manufactured",
    },
    {
      icon: Star,
      number: "500",
      label: "Unique Bracket Designs",
    },
    {
      icon: Truck,
      number: "12000",
      label: "Units Shipped",
    },
    {
      icon: Award,
      number: "50",
      label: "Industry Awards",
    },
  ];

  return (
    <div className="w-full bg-gray-900 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-lg font-medium">
            OUR STRENGTHS
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg">
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
                className="bg-gray-800/50 rounded-2xl p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mt-4">
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
                  <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-white text-2xl font-bold">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
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
