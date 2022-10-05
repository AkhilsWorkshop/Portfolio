import logo from '../assets/logo.svg';
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {

    const items = [
        {
            id: 1,
            item: "About",
            duration: 100
        },
        {
            id: 2,
            item: "Work",
            duration: 200
        },
        {
            id: 3,
            item: "Skills",
            duration: 300
        },
        {
            id: 4,
            item: "Contact",
            duration: 400
        }
    ]

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
                        {items.map(({ id, item, duration }) => (
                            <>

                                <Link key={id} to={item} smooth duration={500} className="cursor-pointer text-secondary duration-300 hover:text-primary"
                                    data-aos="fade-down"
                                    data-aos-once="true"
                                    data-aos-delay={duration}>
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

                    <div onClick={() => setMenu(!menu)} className="cursor-pointer z-20 text-secondary md:hidden">
                        {menu ? <CgClose size={35} /> : <CgMenu size={35} />}
                    </div>

                    {menu && (
                        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-sixth to-black duration-1000">
                            {items.map(({ id, item }) => (

                                <Link onClick={() => setMenu(!menu)} to={item} smooth duration={500} key={id} className="px-4 cursor-pointer text-secondary py-6 text-4xl">
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