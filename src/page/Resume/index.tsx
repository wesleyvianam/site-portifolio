import Navbar from "../../Components/Navbar";
import {BsBook} from 'react-icons/bs'
import {GiElephant} from 'react-icons/gi'
import {FaSymfony, FaLaravel, FaJava} from 'react-icons/fa'
import {SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiSass, SiStyledcomponents, SiNodedotjs} from 'react-icons/si'

export default function Resume() {
    return (
        <div>
            <Navbar children={'Resume'} />


            <div className="mx-7 flex items-center">
                    <div className="bg-gradient-card rounded-lg">
                        <div className="p-3 rounded-lg bg-[#202022]">
                            <BsBook className=""/>
                        </div>
                    </div>
                    <h2 className="font-semibold text-2xl">Education</h2>
            </div>  
            <ol className="mb-8 ml-3">              
                <li className="pb-12 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Tecnólogo Análise e Desenvolvimento de Sistemas</h3>
                        <small className="text-gold-color text-base">Universidade Estácio - 2021/2023</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="ml-4 relative bottom-5 left-5 px-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3>Pós Graduação Engenharia de Software</h3>
                        <small className="text-gold-color text-base">Universidade Estácio - 2023/2024</small>
                    </div>
                    <p>Lorem ipsumconsectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
            </ol>

            <div className="mx-7 flex items-center">
                <div className="bg-gradient-card rounded-lg">
                    <div className="p-3 rounded-lg bg-[#202022]">
                        <BsBook className=""/>
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">Experience</h2>
            </div>  
            <ol className="mb-8 ml-3">              
                <li className="pb-1 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                        <small className="text-gold-color text-base">Dzenvolve Soluções Estratégicas - 02/2023 - Present</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="pb-12 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                        <small className="text-gold-color text-base">DFranquias - 10/2021 a 9/2020</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="ml-4 relative bottom-5 left-5 px-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Estagiário</h3>
                        <small className="text-gold-color text-base">Intituto Nacional de Seguro Social   09/2017 - 09/2019</small>
                    </div>
                    <p>Lorem ipsum dolor sit elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
            </ol>

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
        </div>        
    )
}