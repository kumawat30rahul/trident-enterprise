import React from "react";
import { Settings, Users, Package } from "lucide-react";

const FeatureCards = () => {
  const cards = [
    {
      icon: Settings,
      title: "Custom Manufacturing",
      description:
        "We work closely with our clients to understand their needs and deliver tailored sheet metal solutions with precision and excellence.",
    },
    {
      icon: Users,
      title: "40+ Years Experience",
      description:
        "With over 40 years in metal stamping and press metal parts, our expertise ensures quality, durability, and performance in every component.",
    },
    {
      icon: Package,
      title: "Quality Assurance",
      description:
        "As an ISO 9001:2015 certified manufacturing unit, we ensure every component meets strict quality standards for reliability and durability.",
    },
  ];

  return (
    <div className="w-full bg-gray-900 px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="flex-1 bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mt-6 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
