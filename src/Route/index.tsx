import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../page/Contact";
import Index from "../page/Index";

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/index" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}