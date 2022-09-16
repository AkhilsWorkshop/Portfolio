import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Social = () => {
    return (
        <div className="bottom-0 right-0 fixed flex text-white">
            <div className="flex justify-end items-end mr-32">
                <ul className="hidden sm:flex flex-col items-center text-gray-500 gap-3">
                    <li className="flex justify-between items-center">
                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer">
                            <BsPersonLinesFill size={24} className="duration-300 hover:text-white hover:scale-105" />
                        </a>
                    </li>
                    <li className="flex justify-between items-center">
                        <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer">
                            <AiFillGithub size={25} className="duration-300 hover:text-white hover:scale-105" />
                        </a>
                    </li>
                    <li className="flex justify-between items-center">
                        <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin size={25} className="duration-300 hover:text-white hover:scale-105" />
                        </a>
                    </li>
                    <li className="flex justify-between items-center">
                        <a href="mailto://hakhilkumar@gmail.com" target="_blank" rel="noreferrer">
                            <MdEmail size={25} className="duration-300 hover:text-white hover:scale-105" />
                        </a>
                    </li>

                    <li className="w-[0.1rem] h-32 bg-gray-500">

                    </li>
                </ul>
            </div>



        </div>

    )
}

export default Social