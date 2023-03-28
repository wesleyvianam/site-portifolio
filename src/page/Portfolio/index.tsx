import Navbar from "../../Components/Navbar";
import project1 from "../../assets/image/project-1.jpg";
import project2 from "../../assets/image/project-2.png";
import project3 from "../../assets/image/project-3.jpg";
import project4 from "../../assets/image/project-4.png";
import project5 from "../../assets/image/project-5.png";
import project6 from "../../assets/image/project-6.png";
import project7 from "../../assets/image/project-7.png";
import project8 from "../../assets/image/project-8.jpg";
import project9 from "../../assets/image/project-9.png";

export default function Portfolio() {
    return (
        <div>
            <Navbar children={'Portfolio'}/>
            <div className="px-8">
                <ul className="flex">
                    <li className="pr-4 text-gold-color">All</li>
                    <li className="pr-4">Web design</li>
                    <li className="pr-4">Web development</li>
                    <li className="pr-4">Applications</li>
                </ul>

                <ul className="grid grid-cols-3 gap-4 mt-6">
                    <li>
                        <img src={project1} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project2} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project3} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project4} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project5} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project6} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project7} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project8} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                    <li>
                        <img src={project9} className="rounded-xl hover:scale-105 duration-500"/>
                    </li>
                </ul>
            </div>
        </div>        
    )
}