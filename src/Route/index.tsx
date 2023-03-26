import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abount from "../page/Abount/Index";
import Contact from "../page/Contact";
import Portfolio from "../page/Portfolio";
import Resume from "../page/Resume";

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Abount/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
        </BrowserRouter>
    )
}