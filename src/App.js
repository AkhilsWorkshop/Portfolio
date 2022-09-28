import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Lazy/Loading";
import Work from "./components/Work";

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
          {/* <Social /> */}
          <Home />
          <About />
          <Work />
          <Education />
          {/* <Contact /> */}
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
