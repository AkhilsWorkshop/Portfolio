import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Lazy/Loading";
import Work from "./components/Work";
import Skills from "./components/Skills";
import DotNav from "./DotNav";
import ParticleBackground from "./components/ParticleBackground";

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
          <ParticleBackground />
          <Home />
          <About />
          <Work />
          <Skills />

          <Contact />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
