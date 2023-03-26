import { Link } from "react-router-dom";

type Props = {
    children: string
}

export default function Navbar({children}: Props) {

    return (
        <nav className="flex justify-between mb-8">
            <h1 className="px-8 pt-7 text-3xl font-semibold">{children}</h1>

            <ul className="flex bg-[#2b2b2c] rounded-tr-3xl rounded-bl-3xl px-8 py-5 border-b border-l border-[#383838]">
                <li className="mr-5">
                    <Link to="/" className={children === 'About' ? 'text-gold-color' : ''}>
                        About
                    </Link>
                </li>
                <li className="mx-5">
                    <Link to="/resume" className={children === 'Resume' ? 'text-gold-color' : ''}>
                        Resume
                    </Link>
                </li>
                <li className="mx-5">
                    <Link to="/portfolio" className={children === 'Portfolio' ? 'text-gold-color' : ''}>
                        Portfolio
                    </Link>
                </li>
                <li className="ml-5">
                    <Link to="/contact" className={children === 'Contact' ? 'text-gold-color' : ''}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}