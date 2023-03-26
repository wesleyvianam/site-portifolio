import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../page/About/Index";
import Contact from "../page/Contact";
import Portfolio from "../page/Portfolio";
import Resume from "../page/Resume";

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
        </BrowserRouter>
    )
}