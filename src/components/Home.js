import { FiExternalLink } from "react-icons/fi"
import { Link } from 'react-scroll';
import { BsChevronDown, BsPersonLinesFill } from "react-icons/bs"


const Home = () => {

    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-fifth">

            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-10 sm:py-0 sm:px-4">

                <div className="flex flex-col justify-center gap-2 sm:gap-4 h-full">

                    <p className="text-primary py-4 font-slogan font-normal"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="100">Hello, my name is</p>
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#F3F0EB]"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="200">Akhil Harikumar.</h2>
                    <h2 className="text-third text-2xl sm:text-6xl font-bold"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="300">I make web applications.</h2>
                    <p className="text-third py-4 sm:w-1/2"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="400">I'm a passionate freelance web developer who loves to build & design web applications. Currently, I'm pursing my Masters in Computer Science at <span className="text-[#ABDF12]">
                            The University of Texas at Arlington.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-3"
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="500">

                        <a href="https://moviehome.akhilkumar.ga/" target="_blank" rel="noreferrer" className="text-[#ABDF12] font-slogan border-2 border-[#ABDF12] my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer duration-500 hover:bg-[#ABDF12]/20">Check out my latest Project<FiExternalLink size={18} />
                        </a>

                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer">
                            <BsPersonLinesFill size={24} className="duration-300 hover:text-primary hover:scale-105" />
                        </a>


                    </div>
                    <div className="flex justify-center"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="1000">
                        <Link to="About" smooth>
                            <BsChevronDown className="text-primary border-2 p-2 mt-5 sm:mt-10 hover:bg-primary/20 duration-200 rounded-full cursor-pointer" size={50} />
                        </Link>
                    </div>

                </div>



            </div>

        </div >
    )
}

export default Home
