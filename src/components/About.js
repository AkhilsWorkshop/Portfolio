import profilePic from "../assets/myImage.jpg"
import { AiFillCaretRight } from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    AOS.init();

    const items = [
        {
            id: 1,
            value: "JavaScript (ES6+)"
        },
        {
            id: 2,
            value: "React"
        },
        {
            id: 3,
            value: "Python"
        },
        {
            id: 4,
            value: "PyScript"
        },
        {
            id: 5,
            value: "Django"
        },
        {
            id: 6,
            value: "Tailwind CSS"
        },
    ]

    return (
        <div name="About" className="h-screen w-full bg-fifth text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full pt-28 sm:pt-0">

                    <div className="flex items-center">
                        <p className="text-2xl md:text-4xl font-bold"><span className="text-primary">01. </span>About me</p>
                        <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-third">
                        <div>
                            <p data-aos="fade-in"
                                data-aos-once="true"
                                className="text-l sm:text-xl mt-10">
                                Hello! I'm Akhil, and I enjoy leveraging the newest technologies to design and construct online applications. I developed websites using Weebly and Wix during my school days, which sparked my interest in web development. I received my Undergraduate degree in Computer Science in 2021. I'm now a student at The University of Texas at Arlington pursuing my Masters in Computer Science.
                            </p>

                            <br />

                            <p className="text-l sm:text-xl">
                                Here are few technologies I'm comfortable with:
                            </p>

                            <br />

                            <p className="flex text-sm sm:text-base">
                                <ol className="flex flex-col flex-wrap gap-x-10 sm:gap-x-20 h-16">
                                    {items.map(({ id, value }) => (
                                        <li key={id} className="flex items-center gap-2 tracking-wider font-slogan"><AiFillCaretRight className="text-primary" size={10} /> {value}</li>
                                    ))}

                                </ol>
                            </p>


                            <br />
                        </div>

                        <div>
                            <img src={profilePic} alt="My profile pic" className="rounded-full md:rounded-md mx-auto w-2/4 mt-10 md:mt-0 md:w-3/4 duration-700"></img>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About