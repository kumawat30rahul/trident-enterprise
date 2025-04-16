import { Button } from "../../ui/button";
import { Mail, MapPin } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="bg-gray-100 w-full px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-gray-900 text-2xl font-bold">
          Gurukripa<span className="text-red-600">Industries</span>
        </div>

        {/* Middle section */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ">
            {/* Get in Touch */}
            <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-white p-2 flex items-center justify-center rounded shadow-sm">
                <Mail className="text-red-600" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-semibold">Get In Touch</div>
                <div className="text-sm">contact@gurukripa.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-white p-2 flex items-center justify-center rounded shadow-sm">
                <MapPin className="text-red-600" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-gray-900 font-semibold">
                  Visit Our Office
                </div>
                <div className="text-sm">Mumbai, India</div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <Button className="bg-red-600 hover:bg-red-700">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
