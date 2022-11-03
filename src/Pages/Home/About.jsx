import profilePic from "../assets/myImage.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Progress from "../../components/Progress";


const About = () => {

    AOS.init();

    return (
        <div name="About" className="min-h-screen lg:h-screen w-full bg-gradient-to-br from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 py-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full gap-10">

                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-third gap-5">
                        <div className="flex flex-col gap-10">

                            <div className="flex items-center"
                                data-aos="fade-right"
                                data-aos-once="true"
                                data-aos-delay="100">
                                <p className="text-2xl md:text-3xl font-bold text-secondary"><span className="text-primary">01. </span>About me</p>
                                <div className="flex bg-gradient-to-r from-third h-[0.1rem] grow ml-5"></div>
                            </div>

                            <p className="sm:text-xl text-third font-slogan"
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="200">
                                Hello! <span className="text-primary">I'm Akhil</span>, and I enjoy leveraging the newest technologies to design and construct online applications. I developed websites using Weebly and Wix during my school days, which sparked my interest in <span className="text-primary">web development</span>. I received my Undergraduate degree in Computer Science in 2021. I'm now a student at The University of Texas at Arlington pursuing my Masters in Computer Science.
                            </p>

                        </div>

                        <img src={profilePic} alt="My profile pic" className="w-2/4 md:w-1/4 rounded-full shadow-xl hover:sepia-0 border-2 border-sixth sm:sepia md:rounded-md mx-auto mt-10 md:mt-0 duration-700"
                            data-aos="fade-left"
                            data-aos-once="true"
                            data-aos-delay="300"></img>

                    </div>

                    <Progress />


                </div>
            </div>
        </div>
    )
}

export default About