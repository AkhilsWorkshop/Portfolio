import { list } from '../data/skills';

const Skills = () => {


    return (
        <div name="Skills" className="min-h-screen w-full bg-fifth text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-2 pt-36 sm:px-4">

                <div className="flex flex-col justify-center w-full">

                    <div className="flex items-center pl-8 sm:pl-0"
                        data-aos="fade-right"
                        data-aos-delay="100">
                        <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">03. </span>I've worked on</p>
                        <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                    </div>

                    <div className="flex flex-wrap justify-center mt-10"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        {list.map((item) => (
                            <>
                                <div key={item.id} className="bg-sixth m-3 p-4 w-24 rounded-md flex flex-col gap-2 shadow-xl hover:opacity-60 duration-300">
                                    <img src={item.URL} alt={item.title} className={`${item.property}`} />
                                    <p className="text-sm text-center">{item.title}</p>
                                </div>


                            </>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
