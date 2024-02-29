import About from "./About";
import Equipments from "./Equipments";
import "animate.css";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Equipments />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
