import Navbar from "../../Components/Navbar";
import {BsBook} from 'react-icons/bs'

export default function Resume() {
    return (
        <div>
            <Navbar children={'Resume'} />


            <div className="ml-4 flex items-center relative right-1">
                    <div className="bg-gradient-card rounded-lg">
                        <div className="p-3 rounded-lg bg-[#202022]">
                            <BsBook className=""/>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl">Education</h2>
            </div>  
            <ol className="relative border-l border-[#383838] dark:border-gray-700 mx-8 p-3 mb-10">              
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
            </ol>

            <div className="ml-4 flex items-center relative right-1">
                    <div className="bg-gradient-card rounded-lg">
                        <div className="p-3 rounded-lg bg-[#202022]">
                            <BsBook className=""/>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl">Experience</h2>
            </div>  
            <ol className="relative border-l border-[#383838] dark:border-gray-700 mx-8 p-3">              
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                </li>
            </ol>
        </div>        
    )
}