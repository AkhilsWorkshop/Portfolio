import { progressData } from "../data/ProgressData"
import target from "../assets/Timeline/target.png"

const Progress = () => {
    return (
        <div className="sm:bg-gradient-to-br from-fifth via-bgDark to-fifth sm:shadow-2xl rounded-md"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400">

            <div className="flex justify-center items-center sm:bg-bgDark py-1 rounded-t-md sm:shadow-xl sm:border-b border-b-sixth">
                <p className="text-third/70 font-semibold text-lg tracking-widest">My Progress</p>
            </div>

            <ol className="mt-6 grid grid-flow-row sm:grid-flow-col gap-x-1 justify-center p-5">

                {progressData.map((eachItem) => (
                    <li class="relative flex flex-row sm:flex-col">

                        <div class="flex flex-col sm:flex-row items-center grow-0 shrink-0">

                            <img src={eachItem.image} alt="AU logo" className={`z-10 w-10 aspect-square ${eachItem.imgClass}`} />

                            <div class={`flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r h-full sm:h-[1.5px] ${eachItem.additionalClass}`}></div>

                        </div>

                        <div className="flex flex-col my-6 sm:my-0 mt-0 sm:mt-6 ml-6 sm:ml-0">

                            <p className="mb-1 text-lg font-semibold leading-none text-[#ffffff]"> {eachItem.title}</p>
                            <p className="text-sm font-normal tracking-wider text-third">{eachItem.date}</p>
                            <p className="my-3 text-sm text-secondary/90 font-semibold sm:pr-4">{eachItem.shortDescription}</p>

                        </div>

                    </li>
                ))}

                <img src={target} alt="Success" className="z-10 w-10 aspect-square" />

            </ol>

        </div>
    )
}

export default Progress