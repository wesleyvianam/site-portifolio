import Navbar from "../../Components/Navbar";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function Resume() {
    return (
        <div>
            <Navbar children={'Resume'} />

            <Education />

            <Experience />

            <Skills />
        </div>        
    )
}