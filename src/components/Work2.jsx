import auLogo from "../assets/Timeline/auLogo.png"
import utaLogo from "../assets/Timeline/utaLogo.png"
import codingLogo from "../assets/Timeline/codingLogo.png"
import { IoMdSchool } from "react-icons/io"
import { MdWork } from "react-icons/md"

const Work = () => {
    return (
        <div name="Work" className="relative h-screen w-full bg-gradient-to-tr from-black
         to-fifth text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center gap-10 w-full h-full px-10 sm:px-4">

                <div className="flex items-center pl-8 sm:pl-0"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">02. </span>My Timeline</p>
                    <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                </div>

                <ol className="relative border-l border-third translate-x-0 lg:translate-x-[50%]">
                    <li className="mb-16 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-primary bg-primary">
                            <IoMdSchool size={25} className=" text-sixth" />
                        </span>
                        <div className="flex items-center gap-2">
                            <img src={utaLogo} alt="AU logo" className="h-10" />
                            <div className="flex flex-col">
                                <h3 className="mb-1 text-xl font-semibold text-[#ffffff]"> University of Texas at Arlington</h3>
                                <p className="block text-sm font-normal leading-none tracking-wider text-[#c9c6c3]">Aug 2021 - May 2023</p>
                            </div>
                        </div>
                        <p className="block my-2 text-base text-secondary font-normal">Master of Science - Computer Science</p>
                    </li>

                    <li className="mb-16 lg:even:translate-x-[-100%] flex flex-col items-start lg:items-end pr-0 ml-6 lg:ml-0 lg:pr-6">
                        <span className="flex absolute -left-3 lg:left-auto lg:-right-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-primary bg-primary">
                            <MdWork size={20} className=" text-sixth" />
                        </span>
                        <div className="flex items-center gap-2 lg:flex-row-reverse">
                            <img src={codingLogo} alt="AU logo" className="h-10" />
                            <div className="flex flex-col items-start lg:items-end">
                                <h3 className="mb-1 text-xl font-semibold text-[#ffffff]"> Freelance Web Developer</h3>
                                <p className="block text-sm font-normal leading-none tracking-wider text-[#c9c6c3]">Jan 2018 - Aug 2021</p>
                            </div>
                        </div>
                        <p className="block my-2 text-base text-secondary font-normal">Add contents here</p>
                    </li>

                    <li className="ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-primary bg-primary">
                            <IoMdSchool size={25} className=" text-sixth" />
                        </span>
                        <div className="flex items-center gap-2">
                            <img src={auLogo} alt="AU logo" className="h-10 invert-[100%]" />
                            <div className="flex flex-col">
                                <h3 className="mb-1 text-xl font-semibold text-[#ffffff]"> Anna University</h3>
                                <p className="block text-sm font-normal leading-none tracking-wider text-[#c9c6c3]">Sep 2017 - July 2021</p>
                            </div>
                        </div>
                        <p className="block my-2 text-base text-secondary font-normal">Bachelor of Engineering - Computer Science Engineering</p>
                    </li>

                </ol>


            </div>
        </div>
    )
}

export default Work
