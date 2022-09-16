import profilePic from "../assets/myImage.jpg"
import { AiFillCaretRight } from "react-icons/ai"

const About = () => {

    const items = [
        {
            id: 1,
            value: "JavaScript (ES6)"
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
        <div name="About" className="min-h-screen w-full bg-gray-900 text-white">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full pt-28">

                    <div className="flex items-center">
                        <p className="text-2xl md:text-4xl font-bold"><span className="text-[#fff559]">01. </span>About me</p>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
                        <div>
                            <p className="text-gray-400 text-l sm:text-xl mt-10 text-justify">
                                Hello! I'm Akhil, and I enjoy leveraging the newest technologies to design and construct online applications. I developed websites using Weebly and Wix during my school days, which sparked my interest in web development. I received my Undergraduate degree in Computer Science in 2021. I'm now a student at The University of Texas at Arlington pursuing my Masters in Computer Science.
                            </p>

                            <br />

                            <p className="text-gray-400 text-l sm:text-xl">
                                Here are few technologies I'm comfortable with:
                            </p>

                            <br />

                            <p className="text-gray-400 flex text-l sm:text-xl">
                                <ol className="flex flex-col flex-wrap gap-x-5 sd:gap-x-20 h-20">
                                    {items.map(({ id, value }) => (
                                        <li key={id} className="flex items-center gap-2"><AiFillCaretRight className="text-[#fff559]" /> {value}</li>
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