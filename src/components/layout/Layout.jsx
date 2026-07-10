import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../../pages/Home";

function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default Layout;