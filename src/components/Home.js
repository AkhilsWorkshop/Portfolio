import { FiExternalLink } from "react-icons/fi"
import { Link } from 'react-scroll';
import 'animate.css';

const Home = () => {

    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-fifth">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4">

                <div className="flex flex-col justify-center gap-4 h-full animate__animated animate__fadeIn">

                    <p className="text-primary py-4 font-slogan font-normal">Hello, my name is</p>
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#F3F0EB]">Akhil Harikumar.</h2>
                    <h2 className="text-third text-2xl sm:text-6xl font-bold">I make web applications.</h2>
                    <p className="text-third py-4 sm:w-1/2">I'm a passionate freelance web developer who loves to build & design web applications. Currently, I'm pursing my Masters in Computer Science at <span className="text-[#ABDF12]">
                        The University of Texas at Arlington.
                    </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-3">

                        <a href="https://moviehome.akhilkumar.ga/" target="_blank" rel="noreferrer" className="text-[#ABDF12] font-slogan border-2 border-[#ABDF12] my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer duration-500 hover:bg-[#ABDF12]/20">Check out my latest Project<FiExternalLink size={18} />
                        </a>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home