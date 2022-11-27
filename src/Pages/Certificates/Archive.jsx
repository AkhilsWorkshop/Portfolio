import React from 'react'
import { AiFillLeftCircle } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TitleBar from '../../components/Common/TitleBar'
import { certificateData } from '../../data/certificateData';


const Archive = () => {
    return (
        <div name="Skills" className="h-auto sm:min-h-screen w-full bg-gradient-to-br from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-10 pt-20 sm:pt-20 sm:px-4 gap-10">

                <Link to="/" >
                    <AiFillLeftCircle className="text-primary/30 hover:text-primary/60 duration-300 cursor-pointer" size={50} />
                </Link>
                <TitleBar name="Complete Archive" sNo="" />

                <div className="flex flex-wrap justify-center mt-10">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs uppercase text-[#ffffff] bg-bgDark">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Certificate Name
                                </th>
                                <th scope="col" class="py-3 px-6 hidden md:table-cell">
                                    provided by
                                </th>
                                <th scope="col" class="py-3 px-6 hidden md:table-cell">
                                    year
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    view
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificateData.map((each) => (
                                <tr class="hover:bg-bgDark duration-200 even:bg-bgDark/30">
                                    <th scope="row" class="py-4 px-6 font-semibold whitespace-nowrap text-md tracking-wider font-slogan">
                                        {each.name}
                                    </th>
                                    <td class="py-4 px-6 hidden md:table-cell">
                                        {each.provider}
                                    </td>
                                    <td class="py-4 px-6 font-semibold whitespace-nowrap text-md tracking-wider hidden md:table-cell font-slogan">
                                        {each.issueYear}
                                    </td>
                                    <td class="py-4 px-6">
                                        <a href={each.links} target="_blank" rel="noreferrer" className="hover:text-primary duration-300">
                                            <FiExternalLink className="" size={20} /></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default Archive