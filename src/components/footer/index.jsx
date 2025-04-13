import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Info Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Gurukripa<span className="text-blue-400">Industries</span>
            </div>
            <p className="mb-4">
              A trusted provider of high-quality sheet metal components for a
              wide range of industries since 1985. ISO 9001:2015 certified
              manufacturing unit specializing in small-scale production.
            </p>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a
                href="mailto:contact@gurukripa.com"
                className="hover:text-blue-400"
              >
                contact@gurukripa.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "Brackets",
                "Washers",
                "Bushes",
                "Mountings",
                "Terminals",
                "Contacts",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h3>
              <ul className="space-y-2">
                {["Facebook", "Instagram", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            Copyright© 2025. Gurukripa Industries. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
