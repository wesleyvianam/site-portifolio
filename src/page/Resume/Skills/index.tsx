import {GiElephant} from 'react-icons/gi'
import {FaSymfony, FaLaravel, FaJava} from 'react-icons/fa'
import {SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiSass, SiStyledcomponents, SiNodedotjs} from 'react-icons/si'

export default function Skills() {
    return (
        <div className="px-8">
                <h2 className="font-semibold text-2xl mb-5">My Skills</h2>
                <div className="mb-5">
                    <h3 className="mb-2 text-xl text-gold-color">Back-end</h3>
                    <ul className="grid grid-cols-3 gap-4">
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <GiElephant className="text-3xl mr-3"/>
                                <span>PHP</span>
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <FaSymfony className="text-3xl mr-3"/>
                                Symfony Framework
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <FaLaravel className="text-3xl mr-3"/>
                                Laravel Framework
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiNodedotjs className="text-3xl mr-3"/>
                                NodeJs
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <FaJava className="text-3xl mr-3"/>
                                Java
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-2 text-xl text-gold-color">Front-end</h3>
                    <ul className="grid grid-cols-3 gap-4">
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiJavascript className="text-3xl mr-3"/>
                                JavaScript
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiTypescript className="text-3xl mr-3"/>
                                TypeScript
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiReact className="text-3xl mr-3"/>
                                React Js
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiTailwindcss className="text-3xl mr-3"/>
                                TailWind CSS
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiSass className="text-3xl mr-3"/>
                                Sass
                            </div>
                        </li>
                        <li className="bg-gradient-card rounded-xl">
                            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                                <SiStyledcomponents className="text-3xl mr-3"/>
                                Styled Components
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}