import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";

function DefaultHome() {
  return (
    <>
      <Hero />

      <About />

      <Products />

      <Gallery />

      <Contact />
    </>
  );
}

export default DefaultHome;