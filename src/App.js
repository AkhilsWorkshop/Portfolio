import Hero from "./Pages/Home/Hero";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Lazy/Loading";
import Skills from "./Pages/Home/Skills";

import Project from "./Pages/Home/Project";
import Footer from "./layouts/Footer";
import DotNav from "./layouts/DotNav";
import Navbar from "./layouts/Navbar";

function App() {

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
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
