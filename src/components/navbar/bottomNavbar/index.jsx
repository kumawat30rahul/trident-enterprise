import React from "react";
import { AlignJustify, Phone } from "lucide-react";

const BottomNavbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full bg-gray-900 px-4 py-3 border-b border-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Navigation Links */}

          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <AlignJustify className="text-white " />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blue-400 hover:text-blue-300">
              Home
            </a>
            <a href="/products" className="text-white hover:text-blue-300">
              Products
            </a>
            <a href="/about" className="text-white hover:text-blue-300">
              About Us
            </a>

            <a href="/contact" className="text-white hover:text-blue-300">
              Contact
            </a>
          </div>

          {/* Contact Info */}

          <div className="flex items-center space-x-2">
            <div className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#1f242a] p-2 flex items-center justify-center rounded">
                <Phone className=" text-blue-400" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-white font-semibold">Contact Us 24/7</div>
                <div className="text-sm">(313) 555-1234</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      {open && (
        <div className="bg-gray-900 p-4 flex flex-col items-center space-y-4 md:hidden">
          <a href="/" className="block text-blue-400 hover:text-blue-300">
            Home
          </a>
          <a href="/products" className="block text-white hover:text-blue-300">
            Products
          </a>
          <a href="/about" className="block text-white hover:text-blue-300">
            About Us
          </a>
          <a href="/contact" className="block text-white hover:text-blue-300">
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;
