import Navbar from "../../Components/Navbar";
import Education from "./Education";
import Experience from "./Experience";
import Back from "./Skills/Back";
import Front from "./Skills/Front";

export default function Resume() {
    return (
        <div>
            <Navbar children={'Resume'} />

            <Education />

            <Experience />

            <Back />

            <Front />
        </div>        
    )
}