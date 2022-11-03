import logo from '../assets/Images/layouts/Navbar/logo.svg';
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { items } from '../data/navData';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="flex justify-center items-center w-full h-12 text-secondary backdrop-blur bg-black/70
        px-4 fixed shadow-xl z-50">
                <div className="max-w-screen-lg flex justify-between items-center w-full">
                    <Link to="Home" smooth duration={500}>
                        <img className="w-14 cursor-pointer hover:scale-95 duration-200" src={logo} alt="Logo"
                            data-aos="fade-up-left"
                            data-aos-once="true"
                            data-aos-delay="0"></img>
                    </Link>


                    <div className="hidden md:flex gap-5">
                        {items.map(({ item, duration }) => (
                            <>

                                <Link activeClass="text-primary" spy={true} key={uuidv4()} to={item} smooth duration={500} className="cursor-pointer text-secondary duration-300 hover:text-primary">
                                    {item}
                                </Link>

                            </>
                        ))}
                        <div className="flex gap-5">
                            <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="500">
                                <AiFillGithub size={25} className="duration-300 hover:text-primary hover:scale-110" />
                            </a>

                            <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="600">
                                <AiFillLinkedin size={25} className="duration-300 hover:text-primary hover:scale-110" />
                            </a>
                        </div>
                    </div>



                    {/* Mobile Version */}
                    <div onClick={() => setMenu(!menu)} className="cursor-pointer z-20 text-secondary md:hidden">
                        {menu ? <CgClose size={35} /> : <CgMenu size={35} />}
                    </div>

                    {menu && (
                        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-sixth to-black duration-1000">
                            {items.map(({ item }) => (

                                <Link onClick={() => setMenu(!menu)} to={item} smooth duration={500} key={uuidv4()} className="px-4 cursor-pointer text-secondary py-6 text-4xl">
                                    {item}
                                </Link>

                            ))}
                            <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-secondary w-fit px-6 py-3 my-6 border-2 border-primary flex items-center rounded-md">Resume
                            </a>
                        </div>
                    )}


                </div>



            </div>

        </>
    )
}

export default Navbar