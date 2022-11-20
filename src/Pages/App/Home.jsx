import Hero from "../Home/Hero";
import About from "../Home/About";
import Contact from "../Home/Contact";
import Skills from "../Home/Skills";
import Project from "../Home/Project";
import DotNav from "../../layouts/DotNav";

function Home() {
    return (
        <>
            <DotNav />
            <Hero />
            <About />
            <Project />
            <Skills />
            <Contact />
        </>
    );
}

export default Home;
