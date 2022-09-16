import { VscArrowRight, VscCloudDownload } from "react-icons/vsc"
import { Link } from 'react-scroll';

const Home = () => {

    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full">

                    <p className="text-[#fff559] py-4 font-slogan font-normal">Hello, my name is</p>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Akhil Harikumar.</h2>
                    <h2 className="text-[#A4CBE3] text-2xl sm:text-6xl font-bold">I make web applications.</h2>
                    <p className="text-gray-400 py-4">I'm a passionate freelance web developer who loves to build & design web applications. Currently, I'm pursing my Masters in Computer Science at <span className="text-[#fff559]">
                        The University of Texas at Arlington.
                    </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-3">

                        <Link to="About" smooth duration={600} className="group text-[#fff559] bg-transparent border-2 border-[#fff559] my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer duration-500 hover:bg-[#fff559]/20">About me
                            <span className="group-hover:rotate-90 duration-500">
                                <VscArrowRight size={20} />
                            </span>
                        </Link>

                        {/* <button className="text-black w-fit px-6 py-3 my-2 hidden sm:flex items-center rounded-md bg-[#fff559]/80 border-2 border-[#fff45983] shadow-xl gap-1 duration-300 hover:bg-[#fff559]/60">Resume
                            <span>
                                <VscCloudDownload size={20} />
                            </span>
                        </button> */}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
