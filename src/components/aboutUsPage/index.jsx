import React from "react";
import TopNavbar from "../navbar/topNavbar";
import BottomNavbar from "../navbar/bottomNavbar";
import Footer from "../footer";

const AboutUs = () => {
  return (
    <div className="w-full">
      <TopNavbar />
      <BottomNavbar />

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Gurukripa Industries
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ISO 9001:2015 certified manufacturing unit specializing in
              small-scale production of sheet metal components and parts
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Company
              </h2>
              <p className="text-gray-700 mb-4">
                Located on the outskirts of Mumbai, we have been a trusted name
                in the industry since our inception in 1985. With over 40 years
                of experience in the field of metal stamping and press metal
                parts, we have honed our expertise to deliver high-quality,
                reliable solutions to our diverse client base.
              </p>
              <p className="text-gray-700 mb-4">
                At Gurukripa Industries, our primary focus is on building
                strong, long-term relationships with our clients. We understand
                the importance of a dependable manufacturing partner, and it is
                this commitment to trust and reliability that has shaped our
                business philosophy from day one.
              </p>
              <p className="text-gray-700">
                Our goal is not just to be your supplier, but a strategic
                partner who you can rely on for consistent quality, timely
                deliveries, and innovative solutions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://img.b2bpic.net/premium-photo/interior-illuminated-factory_1048944-21361075.jpg?w=647"
                alt="Our Factory"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-5xl font-bold text-white">50+</p>
              <p className="text-xl text-white mt-2">Customers</p>
            </div>
            <div className="p-4">
              <p className="text-5xl font-bold text-white">1000+</p>
              <p className="text-xl text-white mt-2">Products</p>
            </div>
            <div className="p-4">
              <p className="text-5xl font-bold text-white">40+</p>
              <p className="text-xl text-white mt-2">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-5xl font-bold text-white">100+</p>
              <p className="text-xl text-white mt-2">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                At Gurukripa Industries, our vision is to be the leading
                provider of high-quality sheet metal components and solutions,
                recognized for our innovation, precision, and unwavering
                commitment to customer satisfaction. We aspire to be the trusted
                manufacturing partner of choice for businesses worldwide,
                delivering cutting-edge products that meet the evolving needs of
                diverse industries.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                We aim to continuously enhance our capabilities through advanced
                technology, skilled craftsmanship, and sustainable practices,
                ensuring that every component we produce not only meets but
                exceeds industry standards. By fostering long-term relationships
                with our clients, we envision contributing to their success and
                growth, while positioning Gurukripa Industries as a leader in
                sheet metal manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto">
                <img
                  src="https://img.b2bpic.net/premium-photo/business-people-conversing-office_13339-167726.jpg?w=647"
                  alt="Sanjay Dahisarkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sanjay Dahisarkar — Founder
              </h2>
              <p className="text-gray-700 mb-4">
                Sanjay Dahisarkar is the visionary founder of Gurukripa
                Industries, established in 1985. With a passion for precision
                engineering and a relentless commitment to quality, he set out
                to create a company that would not only deliver exceptional
                sheet metal components but also build long-lasting partnerships
                with clients.
              </p>
              <p className="text-gray-700">
                Over the past four decades, Sanjay has steered the company
                through significant growth, constantly adapting to industry
                changes and embracing new technologies to stay at the forefront
                of manufacturing excellence. His leadership, combined with a
                deep understanding of client needs, has been the driving force
                behind Gurukripa Industries' success, earning the trust of
                customers across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
