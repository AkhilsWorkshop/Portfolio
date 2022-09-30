import logo from '../assets/logo.svg';
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const items = [
        {
            id: "01.",
            item: "About",
            duration: 100
        },
        {
            id: "02.",
            item: "Work",
            duration: 200
        },
        {
            id: "03.",
            item: "Skills",
            duration: 300
        },
        {
            id: "04.",
            item: "Contact",
            duration: 400
        }
    ]

    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-center items-center w-full h-20 text-white backdrop-blur bg-black/70
        px-4 fixed shadow-xl z-50">
            <div className="max-w-screen-lg flex justify-between items-center w-full">
                <Link to="Home" smooth duration={500}>
                    <img className="w-20 cursor-pointer hover:scale-95 duration-200" src={logo} alt="Logo"
                        data-aos="fade-up-left"
                        data-aos-once="true"
                        data-aos-delay="0"></img>
                </Link>


                <ul className="hidden md:flex">
                    {items.map(({ id, item, duration }) => (
                        <>
                            <li key={id} className="px-4 cursor-pointer text-secondary hover:text-primary"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay={duration}>
                                <Link to={item} smooth duration={500}>
                                    <a key={id} href={item} className="text-primary pr-2">{id}</a>
                                    {item}
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>

                <div onClick={() => setMenu(!menu)} className="cursor-pointer z-20 text-secondary md:hidden">
                    {menu ? <CgClose size={35} /> : <CgMenu size={35} />}
                </div>

                {menu && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fifth via-black to-sixth">
                        {items.map(({ id, item }) => (
                            <li key={id} className="px-4 cursor-pointer text-secondary py-6 text-4xl">
                                <Link onClick={() => setMenu(!menu)} to={item} smooth duration={500}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-secondary w-fit px-6 py-3 my-6 border-2 border-primary flex items-center rounded-md">Resume
                        </a>
                    </ul>
                )}


            </div>



        </div>
    )
}

export default Navbar