import Hero from "../../components/layout/Hero";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import News from "../../components/sections/News";
import Clients from "../../components/sections/OurClients";
import Products from "../../components/sections/Products";
import Resources from "../../components/sections/Resources";
import Services from "../../components/sections/Services";
import Testimonials from "../../components/sections/Testimonials";
import Spacer from "../../components/shared/Spacer";

export default function HomePage() {
  return (
    <>
      <Hero />
        <Spacer />
      <About />
        <Spacer />
      <Resources />
        <Spacer />
      <Testimonials />
        <Spacer />
      <Services />
        <Spacer />
      <Clients />
        <Spacer />
      <Products />
        <Spacer />
      <News />
        <Spacer />
      <Contact />
        <Spacer />
    </>
  );
}
