import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./layouts/Footer";
import Loading from "./layouts/Loading";
import Navbar from "./layouts/Navbar";
import Home from "./pages/App/Home";
import Archive from "./pages/Certificates/Archive";

function App() {

  AOS.init();

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    setTimeout(() => { setLoad(false) }, 2000)
  }, [])

  return (
    <>
      {load ?
        <Loading />
        :

        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="certificates" element={<Archive />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}

export default App;
