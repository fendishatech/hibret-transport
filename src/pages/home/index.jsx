import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Staff from "./sections/staff";

const Home = () => {
  return (
    <div className="h-[150vh] ">
      <Hero />
      <Services />
      <About />
      <Staff />
      <Contact />
    </div>
  );
};

export default Home;
