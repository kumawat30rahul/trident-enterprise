import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-auto bg-white overflow-hidden">
      {/* Background with dots overlay */}
      <div className="absolute inset-0 z-10">
        {/* <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/wbf-static/storage/o6F0u1v/ae28bc40-1cfb-4e28-92a9-26f62108b9d5.png')] bg-cover bg-center" /> */}
        <div className="absolute inset-0 bg-gray-100/80" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(220,38,38,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex flex-col space-y-6 max-w-2xl z-20">
          <span className="text-red-600 text-md md:text-lg font-medium text-center md:text-start">
            WELCOME TO GURUKRIPA INDUSTRIES
          </span>

          <h1 className="text-gray-900 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-start">
            Precision Sheet Metal Manufacturing
          </h1>

          <p className="text-gray-700 text-sm md:text-xl text-center md:text-start">
            Founded with a passion for precision and craftsmanship, we
            specialize in manufacturing small-scale, custom sheet metal parts
            that meet the unique needs of each client.
          </p>

          <div className="pt-4 text-center md:text-start">
            <Button className="md:p-5 md:text-lg bg-red-600 hover:bg-red-700">
              Explore Our Products
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block flex-1 absolute right-0 -top-600 z-10 opacity-80">
          <img
            src="https://storage.googleapis.com/wbf-static/storage/o6F0u1v/ae28bc40-1cfb-4e28-92a9-26f62108b9d5.png"
            alt="Engineer examining industrial component"
            className="object-contain h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
