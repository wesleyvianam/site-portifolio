import Navbar from "../../Components/Navbar";
import {SlPaperPlane} from "react-icons/sl";

export default function Contact() {
    return (
        <div>
            <Navbar children={'Contact'}/>

            <form className="px-8">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name" placeholder="Full name" className="p-3 rounded-xl border"/>

                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder="Email address" className="p-3 rounded-xl border"/>
                </div>
                
                <label htmlFor="message"></label>
                <textarea name="message" id="message" placeholder="Your Message" className="p-3 rounded-xl border w-[100%] mt-4 h-52"></textarea>

                <div className="mt-4 flex justify-end">
                    <div className="bg-gradient-card rounded-xl">
                        <button className="bg-[#29292b] rounded-xl py-2 px-4 flex items-center text-gold-color">
                            <SlPaperPlane className="mr-2"/>
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>        
    )
}