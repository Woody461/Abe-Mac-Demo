import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Music from "../components/sections/Music";
import Events from "../components/sections/Events";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Music />
      <Events />
      <Contact />
    </>
  );
}

export default Home;
