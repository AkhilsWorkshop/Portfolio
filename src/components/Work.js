import { FiGithub, FiExternalLink } from "react-icons/fi"

import firstImg from "../assets/Images/Movie/1.png"
import firstImgMob from "../assets/Images/Movie/1-mobile.png"

const Work = () => {

    const list = [
        {
            id: 1,
            name: "Movie Home",
            first: firstImg,
            second: firstImgMob,
            desc: "A web app for getting information about Movies, TV shows and much more. Feeling bored? You can discover trending TV Shows and movies. Get cast, crew, popularity, release date, trailer and much more for Movies & TV shows. Get details about cast/crew members and discover other movies they have worked on.",
            tags: ["React", "Tailwind CSS", "API", "Github"],
        },
        {
            id: 2,
            first: firstImg,
            second: firstImgMob,
            desc: "This site was built using React!",
            tags: [],
        },

    ]

    return (


        <div name="Work" className="min-h-screen w-full bg-fifth text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-10 pt-36 sm:px-4">

                <div className="flex flex-col justify-center w-full">

                    <div className="flex items-center">
                        <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">02. </span>Few things I've made</p>
                        <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                    </div>

                    <div className="flex flex-col gap-20 items-center justify-center">


                        {list.map(({ id, name, desc }) => (
                            <>
                                <div className="flex flex-col sm:relative text-third pt-5 ">

                                    <img key={id} className="absolute hidden sm:flex aspect-auto w-[30%] right-0 mt-[10%] drop-shadow-xl z-10" src={firstImgMob} alt={id}
                                        data-aos="fade-left"
                                        data-aos-once="true"
                                        data-aos-duration="1500" />

                                    <img key={id} className="aspect-auto w-full sm:w-[80%] drop-shadow-xl" src={firstImg} alt={id}
                                        data-aos="fade-right"
                                        data-aos-once="true"
                                        data-aos-duration="1500" />

                                    <div className="flex flex-col sm:w-2/3 bg-sixth mt-2 sm:mt-7 p-5 rounded-md shadow-lg hover:shadow-xl gap-2"
                                        data-aos="fade-up-right"
                                        data-aos-once="true"
                                        data-aos-duration="1500" >
                                        <div className="flex items-center justify-between">
                                            <p className="text-primary text-xl font-slogan">{name}</p>
                                            <div className="flex gap-2 items-center font-slogan">
                                                <a href="https://github.com/AkhilsWorkshop/Movie-Home" target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary"><FiGithub size={18} />Code
                                                </a>

                                                <FiGithub className="sm:hidden" size={25} href="https://github.com/AkhilsWorkshop/Movie-Home" target="_blank" rel="noreferrer" />
                                                <a href="https://moviehome.akhilkumar.ga/" target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary">View Site <FiExternalLink size={18} />
                                                </a>
                                                <FiExternalLink className="sm:hidden" size={30} href="https://github.com/AkhilsWorkshop/Movie-Home" target="_blank" rel="noreferrer" />
                                            </div>

                                        </div>

                                        <p className="text-sm">{desc}</p>
                                    </div>

                                </div>
                            </>

                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Work