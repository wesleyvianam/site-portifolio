import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <nav className="flex justify-between">
            <h1 className="px-8 py-3">Name da Pagina</h1>

            <ul className="flex bg-[#2b2b2c] rounded-tr-3xl rounded-bl-3xl px-8 py-3 border-b border-l border-[#383838]">
                <li className="mr-5">
                    <Link to="/">About</Link>
                </li>
                <li className="mx-5">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="mx-5">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="ml-5">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}