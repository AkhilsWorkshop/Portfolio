import profilePic from "../assets/myImage.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    AOS.init();

    return (
        <div name="About" className="h-screen w-full bg-fifth text-secondary">

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


                </div>
            </div>
        </div>
    )
}

export default About