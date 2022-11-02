import auLogo from "../assets/Timeline/auLogo.png"
import utaLogo from "../assets/Timeline/utaLogo.png"
import codingLogo from "../assets/Timeline/codingLogo.png"
import { IoMdSchool } from "react-icons/io"
import { MdWork } from "react-icons/md"

const Progress = () => {
    return (
        <>
            <div className="flex items-center mt-6">
                <div className="sm:flex bg-third/30 h-[0.01rem] grow mr-5"></div>
                <p className="text-center font-bold text-lg">My Progress</p>
                <div className="sm:flex bg-third/30 h-[0.01rem] grow ml-5"></div>
            </div>

            <ol className="mt-6 grid grid-flow-row sm:grid-flow-col auto-rows-fr sm:auto-cols-fr gap-x-1">

                <li class="relative flex flex-row sm:flex-col mb-2 sm:mb-0">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex z-10 justify-center items-center">
                            <img src={auLogo} alt="AU logo" className="h-10 invert-[100%]" />
                        </div>
                        <div className="flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r from-third to-[#ffbc04] h-full sm:h-[1.5px]"></div>
                    </div>
                    <div className="mt-0 sm:mt-6 ml-6 sm:ml-0">

                        <div className="flex flex-col">
                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> Anna University</p>
                            <p className="block text-sm font-normal tracking-wider text-[#c9c6c3]">Sep 2017 - July 2021</p>
                            <p className="block my-2 text-sm text-secondary font-semibold">Bachelor of Engineering - Computer Science Engineering</p>
                        </div>

                    </div>
                </li>

                <li class="relative flex flex-row sm:flex-col mb-2 sm:mb-0">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex z-10 justify-center items-center">
                            <img src={codingLogo} alt="AU logo" className="h-10" />
                        </div>
                        <div class="flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#ffbc04] to-primary h-full sm:h-[1.5px]"></div>
                    </div>
                    <div class="mt-0 sm:mt-6 ml-6 sm:ml-0">

                        <div className="flex flex-col">
                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> Freelance Web Developer</p>
                            <p className="text-sm font-normal tracking-wider text-[#c9c6c3]">Jan 2018 - Aug 2021</p>
                            <p className="my-2 text-sm text-secondary font-semibold"></p>
                        </div>

                    </div>
                </li>

                <li class="relative flex flex-row sm:flex-col mb-2 sm:mb-0">
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex z-10 justify-center items-center">
                            <img src={utaLogo} alt="AU logo" className="h-10" />
                        </div>
                        <div class="flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r from-primary to-[#00ff0d] h-full sm:h-[1.5px]"></div>
                    </div>
                    <div class="mt-0 sm:mt-6 ml-6 sm:ml-0">

                        <div className="flex flex-col">
                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> University of Texas at Arlington</p>
                            <p className="text-sm font-normal tracking-wider text-[#c9c6c3]">Aug 2021 - May 2023</p>
                            <p className="my-2 text-sm text-secondary font-semibold">Master of Science - Computer Science</p>
                        </div>

                    </div>
                </li>
            </ol>

            {/* <ol className="sm:hidden relative border-l mt-6 border-third">
                <li class="relative flex mb-6 sm:mb-0">
                    <div class="flex flex-col items-center">
                        <div class="flex z-10 justify-center items-center">
                            <img src={utaLogo} alt="AU logo" className="h-10" />
                        </div>
                        <div class=" h-full bg-gradient-to-r from-primary to-[#00ff0d] w-[1.5px]"></div>
                    </div>
                    <div class="ml-6">

                        <div className="flex flex-col">
                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> University of Texas at Arlington</p>
                            <p className="text-sm font-normal tracking-wider text-[#c9c6c3]">Aug 2021 - May 2023</p>
                            <p className="my-2 text-sm text-secondary font-semibold">Master of Science - Computer Science</p>
                        </div>

                    </div>
                </li>
                <li className="mb-16 ml-6">
                    <span className="flex absolute -left-5 justify-center items-center">
                        <img src={utaLogo} alt="AU logo" className="h-8" />
                    </span>
                    <div className="flex items-center gap-2">

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

            </ol> */}
        </>
    )
}

export default Progress
