import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Social />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
