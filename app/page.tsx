import Header from "./components/Header";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Hero from "./components/Hero";
import SliderPartners from "./components/SliderPartners";
import Oferta from "./components/Oferta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Slider />
      <Info />
      <Hero />
      <SliderPartners />
      <Oferta />
      <Contact />
      <hr className="divider-line"></hr>
      <Footer />
    </div>
  );
}
