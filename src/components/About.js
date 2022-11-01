import profilePic from "../assets/myImage.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import auLogo from "../assets/Timeline/auLogo.png"
import utaLogo from "../assets/Timeline/utaLogo.png"
import codingLogo from "../assets/Timeline/codingLogo.png"
import { IoMdSchool } from "react-icons/io"
import { MdWork } from "react-icons/md"


const About = () => {

    AOS.init();

    return (
        <div name="About" className="min-h-screen lg:h-screen w-full bg-gradient-to-br from-black
        to-fifth text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full sm:pt-0">

                    <div className="flex items-center"
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="100">
                        <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">01. </span>About me</p>
                        <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-third gap-3"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="200">
                        <div>
                            <p className="text-l sm:text-xl mt-10">
                                Hello! <span className="text-primary">I'm Akhil</span>, and I enjoy leveraging the newest technologies to design and construct online applications. I developed websites using Weebly and Wix during my school days, which sparked my interest in <span className="text-primary">web development</span>. I received my Undergraduate degree in Computer Science in 2021. I'm now a student at The University of Texas at Arlington pursuing my Masters in Computer Science.
                            </p>
                        </div>

                        <div>
                            <img src={profilePic} alt="My profile pic" className="rounded-full shadow-xl hover:sepia-0 border-2 border-sixth sm:sepia md:rounded-md mx-auto w-2/4 mt-10 md:mt-0 md:w-[90rem] duration-700"></img>
                        </div>
                    </div>

                    <ol class="mt-12 sm:grid grid-flow-col auto-cols-fr gap-x-1">

                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="flex ml-2 z-10 justify-center items-center w-6 h-6 rounded-full ring-8 sm:ring-8 ring-primary bg-primary">
                                    <IoMdSchool size={25} className=" text-sixth" />
                                </div>
                                <div class="hidden sm:flex w-full bg-third h-0.5"></div>
                            </div>
                            <div class="mt-8">
                                <div className="flex items-start gap-2">
                                    <img src={auLogo} alt="AU logo" className="h-10 invert-[100%]" />
                                    <div className="flex flex-col">
                                        <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> Anna University</p>
                                        <p className="block text-sm font-normal tracking-wider text-[#c9c6c3]">Sep 2017 - July 2021</p>
                                        <p className="block my-2 text-sm text-secondary font-semibold">Bachelor of Engineering - Computer Science Engineering</p>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="flex ml-2 z-10 justify-center items-center w-6 h-6 rounded-full ring-8 sm:ring-8 ring-primary bg-primary">
                                    <MdWork size={20} className=" text-sixth" />
                                </div>
                                <div class="hidden sm:flex w-full bg-third h-0.5"></div>
                            </div>
                            <div class="mt-8">
                                <div className="flex items-start gap-2">
                                    <img src={codingLogo} alt="AU logo" className="h-10" />
                                    <div className="flex flex-col">
                                        <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> Freelance Web Developer</p>
                                        <p className="text-sm font-normal tracking-wider text-[#c9c6c3]">Jan 2018 - Aug 2021</p>
                                        <p className="my-2 text-sm text-secondary font-semibold"></p>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="flex ml-2 z-10 justify-center items-center w-6 h-6 rounded-full ring-8 sm:ring-8 ring-primary bg-primary">
                                    <IoMdSchool size={25} className="text-sixth" />
                                </div>
                                <div class="hidden sm:flex w-full bg-third h-0.5"></div>
                            </div>
                            <div class="mt-8">
                                <div className="flex items-start gap-2">
                                    <img src={utaLogo} alt="AU logo" className="h-10" />
                                    <div className="flex flex-col">
                                        <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> University of Texas at Arlington</p>
                                        <p className="text-sm font-normal tracking-wider text-[#c9c6c3]">Aug 2021 - May 2023</p>
                                        <p className="my-2 text-sm text-secondary font-semibold">Master of Science - Computer Science</p>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ol>



                </div>
            </div>
        </div>
    )
}

export default About