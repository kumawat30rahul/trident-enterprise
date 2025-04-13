import { Button } from "../../ui/button";
import { Mail, MapPin } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="bg-black w-full px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Gurukripa<span className="text-blue-400">Industries</span>
        </div>

        {/* Middle section */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ">
            {/* Get in Touch */}
            <div className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#1f242a] p-2 flex items-center justify-center rounded">
                <Mail className=" text-blue-400" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-white font-semibold">Get In Touch</div>
                <div className="text-sm">contact@gurukripa.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#1f242a] p-2 flex items-center justify-center rounded">
                <MapPin className=" text-blue-400" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-white font-semibold">Visit Our Office</div>
                <div className="text-sm">Mumbai, India</div>
              </div>
            </div>
          </div>

          {/* Schedule Button */}
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
