import { VscArrowRight, VscCloudDownload } from "react-icons/vsc"
import profilePic from "../assets/myImage.jpg"
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-[#272727] via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Web Developer</h2>
                    <p className="text-gray-400 py-4">Aspiring professional with strong communication skills and strong capability
                        to work independently or as part of a team, looking for challenging
                        assignments in Frontend, Backend</p>
                    <div className="flex flex-row items-center gap-3">

                        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 gap-1">Resume
                            <span className="hover:rotate-90 duration-150">
                                <VscCloudDownload size={20} />
                            </span>
                        </button>

                        <Link to="Projects" smooth duration={600} className="group text-white bg-gradient-to-r from-cyan-600 to-blue-500 my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer">View some of my works
                            <span className="group-hover:rotate-90 duration-500">
                                <VscArrowRight size={20} />
                            </span>
                        </Link>

                    </div>
                </div>
                <div>
                    <img src={profilePic} alt="My profile pic" className="rounded-xl mx-auto w-2/3 md:w-2/4"></img>
                </div>


            </div>
        </div>
    )
}

export default Home
