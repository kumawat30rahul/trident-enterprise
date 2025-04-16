import React from "react";
import { motion } from "framer-motion";
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

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2, // Staggered delay for each card
      },
    }),
  };

  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="flex-1 bg-gray-200 rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 shadow-md"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // Pass index for staggered delay
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the card is in view, only once
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mt-6 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
