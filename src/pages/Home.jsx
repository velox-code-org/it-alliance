import AboutCompany from "../components/home/sections/AboutCompany";
import EngineeringEquipment from "../components/home/sections/EngineeringEquipment";
import Hero from "../components/home/sections/Hero";
import ITEquipmentSupply from "../components/home/sections/ITEquipmentSupply";
import OurAdvantures from "../components/home/sections/OurAdvantures";
import OurVendors from "../components/home/sections/OurVendors";
import Service from "../components/home/sections/Service";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <ITEquipmentSupply />
      <EngineeringEquipment />
      <Service />
      <OurVendors />
      <OurAdvantures />
      <AboutCompany /> 
    </div>
  );
};

export default Home;
