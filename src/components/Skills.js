import { list } from '../data/skills';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {


    return (
        <div name="Skills" className="h-screen w-full bg-transparent text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-2 py-20 sm:px-4">

                <div className="flex items-center pl-8 sm:pl-0"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <p className="text-2xl md:text-3xl font-bold"><span className="text-primary">03. </span>I've worked on</p>
                    <div className="hidden sm:flex bg-third/30 h-[0.01rem] w-1/3 ml-5"></div>
                </div>

                <div className="flex flex-wrap justify-center mt-10"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-once="true">
                    {list.map((item) => (
                        <>

                            <div key={uuidv4()} className="bg-sixth m-3 p-4 w-16 h-20 sm:h-auto sm:w-24 rounded-md flex flex-col items-center justify-start gap-2 shadow-xl hover:opacity-60 duration-300">
                                <img src={item.URL} alt={item.title} className={`${item.property}`} />
                                <p className="text-[0.5rem] sm:text-sm text-center">{item.title}</p>
                            </div>

                        </>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default Skills
