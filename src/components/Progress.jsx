import { progressData } from "../data/ProgressData"

const Progress = () => {
    return (
        <div>
            <div className="flex items-center my-8 sm:my-0">
                <div className="flex bg-gradient-to-l from-third to-fifth h-[0.01rem] grow mr-5"></div>
                <p className="text-center text-third/70 font-bold text-lg">My Progress</p>
                <div className="flex bg-gradient-to-r from-third to-fifth h-[0.01rem] grow ml-5"></div>
            </div>

            <ol className="mt-6 grid grid-flow-row sm:grid-flow-col auto-rows-fr auto-cols-fr gap-x-1 justify-center">

                {progressData.map((eachItem) => (
                    <li class="relative flex flex-row sm:flex-col"
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay={eachItem.delay}>

                        <div class="flex flex-col sm:flex-row items-center grow-0 shrink-0">

                            <img src={eachItem.image} alt="AU logo" className={`z-10 w-10 aspect-square ${eachItem.imgClass}`} />

                            <div class={`flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r h-full sm:h-[1.5px] ${eachItem.additionalClass}`}></div>

                        </div>

                        <div className="flex flex-col my-6 sm:my-0 mt-0 sm:mt-6 ml-6 sm:ml-0">

                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> {eachItem.title}</p>
                            <p className="text-sm font-normal tracking-wider text-third">{eachItem.date}</p>
                            <p className="my-3 text-sm text-secondary/90 font-semibold">{eachItem.shortDescription}</p>

                        </div>

                    </li>
                ))}

            </ol>

        </div>
    )
}

export default Progress
