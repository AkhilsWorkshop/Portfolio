import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./layouts/Loading";
import Skills from "./pages/Home/Skills";
import Project from "./pages/Home/Project";
import Footer from "./layouts/Footer";
import DotNav from "./layouts/DotNav";
import Navbar from "./layouts/Navbar";

function App() {

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    setTimeout(() => { setLoad(false) }, 2000)
  }, [])

  return (
    <div>
      {load ?
        <Loading />
        :

        <>
          <Navbar />
          <DotNav />
          <Hero />
          <About />
          <Project />
          <Skills />
          <Contact />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
