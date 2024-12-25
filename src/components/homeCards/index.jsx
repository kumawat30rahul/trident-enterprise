import React from "react";
import { Settings, Users, Package } from "lucide-react";

const FeatureCards = () => {
  const cards = [
    {
      icon: Settings,
      title: "Custom Manufacturing",
      description:
        "Tailored solutions for your specific needs, ensuring the highest quality and precision in every component we produce.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description:
        "Our expert team is dedicated to delivering top-notch manufacturing services with a focus on precision and reliability.",
    },
    {
      icon: Package,
      title: "Comprehensive Solutions",
      description:
        "From design to delivery, we provide a wide range of components to support your projects and applications efficiently.",
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
