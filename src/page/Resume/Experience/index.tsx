import {BsBook} from 'react-icons/bs';

import experience from '../../../Data/experience.json';

import {TExperience} from '../../../Types/index';

export default function Experience() {
    return (
        <>
            <div className="mx-7 flex items-center">
                <div className="bg-gradient-card rounded-lg">
                    <div className="p-3 rounded-lg bg-[#202022]">
                        <BsBook className=""/>
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">Experience</h2>
            </div>  
            <ol className="mb-8 ml-3">              
                {experience.map((exp: TExperience) => (
                    <li key={exp.id} className="pb-1 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                        <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="pb-2">
                            <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                            <small className="text-gold-color text-base flex justify-between items-center pr-10">
                                <span>{exp.at}</span>
                                <span>{exp.time}</span>
                            </small>
                        </div>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ol>
        </>
    )
}