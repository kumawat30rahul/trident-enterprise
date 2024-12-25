import "./App.css";
import WhyChooseUs from "./components/chooseUs";
import InfoSection from "./components/commonInfoSection";
import ContactForm from "./components/contactUs";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import FeatureCards from "./components/homeCards";
import BottomNavbar from "./components/navbar/bottomNavbar";
import TopNavbar from "./components/navbar/topNavbar";
import ProductsSection from "./components/products";

function App() {
  return (
    <>
      <div class="w-full">
        <TopNavbar />
        <BottomNavbar />
        <HeroSection />
        <FeatureCards />
        <ProductsSection />
        <InfoSection
          subtitle="About Us"
          imagePosition="right"
          description="Gurukripa Industries, an ISO 9001:2015 certified manufacturing unit specializing in small-scale production of sheet metal components and parts. Located on the outskirts of Mumbai, we have been a trusted name in the industry since our inception in 1985. With over 40 years of experience in the field of metal stamping and press metal parts, we have honed our expertise to deliver high-quality, reliable solutions to our diverse client base."
          imageLink={
            "https://img.b2bpic.net/premium-photo/interior-illuminated-factory_1048944-21361075.jpg?w=647"
          }
        />
        <InfoSection
          buttonRequired={false}
          imageLink={
            "https://img.b2bpic.net/premium-photo/worker-image-labor-day-photo-free-photo-man-safety-equipment-working-free-photo-two-colleagues_1283069-5548.jpg?w=647"
          }
        />
        <InfoSection
          buttonRequired={false}
          title="Precision Redefined, Commitment Unmatched"
          description="At Gurukripa Industries, our vision is to be the leading provider of high-quality sheet metal components and solutions, recognized for our innovation, precision, and unwavering commitment to customer satisfaction. We aspire to be the trusted manufacturing partner of choice for businesses worldwide, delivering cutting-edge products that meet the evolving needs of diverse industries. We aim to continuously enhance our capabilities through advanced technology, skilled craftsmanship, and sustainable practices, ensuring that every component we produce not only meets but exceeds industry standards. By fostering long-term relationships with our clients, we envision contributing to their success and growth, while positioning Gurukripa Industries as a leader in sheet metal manufacturing.
"
          imagePosition="right"
          subtitle="Vision & Mission"
          imageLink={
            "https://img.b2bpic.net/premium-photo/business-people-conversing-office_13339-167726.jpg?w=647"
          }
        />
        <WhyChooseUs />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
