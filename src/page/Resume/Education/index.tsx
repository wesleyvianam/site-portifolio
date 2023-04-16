import {BsBook} from 'react-icons/bs';

import education from '../../../Data/education.json';

import {TEducation} from '../../../Types/index';

export default function Education() {
    return (
        <>
            <div className="mx-7 flex items-center">
                <div className="bg-gradient-card rounded-lg">
                    <div className="p-3 rounded-lg bg-[#202022]">
                        <BsBook className=""/>
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">Education</h2>
            </div> 
            <ol className="mb-8 ml-3">              
                {education.map((edu: TEducation) => (
                    <li key={edu.id} className="pb-0 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                        <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="pb-2">
                            <h3 className="font-semibold text-lg">{edu.title}</h3>
                            <small className="text-gold-color text-base flex justify-between items-center pr-10">
                                <span>{edu.at}</span>
                                <span>{edu.time}</span>
                            </small>
                        </div>
                        <p>{edu.description}</p>
                    </li>
                ))}
            </ol>
        </>
    )
}