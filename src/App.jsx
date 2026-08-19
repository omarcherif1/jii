import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Disciplines from "./components/Disciplines";
import Planning from "./components/Planning";
import Coaches from "./components/Coaches";
import Pricing from "./components/Pricing";
import Counters from "./components/Counters";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-jii-black text-white font-inter relative overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Marquee />
      <Disciplines />
      <Planning />
      <Coaches />
      <Pricing />
      <Counters />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
