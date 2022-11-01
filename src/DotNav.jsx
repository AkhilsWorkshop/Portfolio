import { BsFillCircleFill } from "react-icons/bs"
import { Link } from "react-scroll"
import { items } from "./data/Pages"
import { v4 as uuidv4 } from 'uuid';

const DotNav = () => {

    return (
        <div className="hidden top-[50%] fixed translate-y-[-50%] right-0 mr-20 xl:flex flex-col gap-4 z-50"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay={500}>
            {items.map(({ item, offset }) => (
                <>

                    <Link activeClass="text-primary scale-150" spy={true} offset={offset} key={uuidv4()} to={item} smooth duration={500} className="cursor-pointer text-third duration-300 hover:text-primary hover:scale-150">
                        <BsFillCircleFill key={uuidv4()} size={10} />
                    </Link>

                </>
            ))}
        </div>
    )
}

export default DotNav
