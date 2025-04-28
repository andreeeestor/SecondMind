import Hero from "../../components/layout/Hero";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import News from "../../components/sections/News";
import Clients from "../../components/sections/OurClients";
import Products from "../../components/sections/Products";
import Resources from "../../components/sections/Resources";
import Services from "../../components/sections/Services";
import Testimonials from "../../components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="md:h-20 h-6" />
      <About />
      <div className="md:h-20 h-6" />
      <Resources />
      <div className="md:h-20 h-6" />
      <Testimonials />
      <div className="md:h-20 h-6" />
      <Services />
      <div className="md:h-20 h-6" />
      <Clients />
      <div className="md:h-20 h-6" />
      <Products />
      <div className="md:h-20 h-6" />
      <News />
      <div className="md:h-20 h-6" />
      <Contact />
      <div className="md:h-20 h-6" />
    </>
  );
}
