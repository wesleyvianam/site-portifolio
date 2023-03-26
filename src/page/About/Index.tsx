import Navbar from "../../Components/Navbar";
import webDesign from '../../assets/image/icon-design.svg';
import webDev from '../../assets/image/icon-dev.svg';
import app from '../../assets/image/icon-app.svg';
import photo from '../../assets/image/icon-photo.svg';
import papai from '../../assets/image/papai.jpg';
import keke from '../../assets/image/keke.jpg';
import miller from '../../assets/image/miller.jpg';

export default function About() {
    return (
        <section>
            <Navbar children={'About'}/>

            <div className="px-8">
                <p className="pb-2">Lorem ipsum dolor, reprehenderit aliquam deserunt ex dolor, incidunt sit sunt provident perferendis dignissimos quia, dolorum, eligendi enim possimus fuga error inventore.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat similique molestiae reprehenderit aliquam deserunt ex dolor, incidunt sit sunt provident perferendis dignissimos quia, dolorum, eligendi enim possimus fuga error inventore.</p>
            </div>

            <div className="p-8">
                <h2 className="font-medium text-2xl pb-5">What I'm Doing</h2>
                <ul className="grid grid-cols-2 gap-4">
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022]">
                            <div className="p-6">
                                <img src={webDesign} width={60} />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Web Design</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022]">
                            <div className="p-6">
                                <img src={webDev}  width={60}/>
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Web Developer</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022]">
                            <div className="p-6">
                                <img src={app}  width={60}  />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Mobile Apps</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022]">
                            <div className="p-6">
                                <img src={photo}  width={60} />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Photography</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div className="pt-8 px-8">
                <h2 className="font-medium text-2xl pb-5">Testimonials</h2>
                <ul className="flex overflow-auto">
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022] w-[388px] mr-4">
                            <div className="p-6 relative bottom-10">
                                <img src={keke}  width={100} className="rounded-xl z-10" />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Photography</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022] w-[388px] mr-4">
                            <div className="p-6">
                                <img src={miller}  width={60} className="rounded-xl" />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Photography</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gradient-card rounded-xl mr-2">
                        <div className="flex rounded-xl bg-[#202022] w-[388px] mr-4">
                            <div className="p-6">
                                <img src={papai}  width={60} className="rounded-xl" />
                            </div>
                            <div className="py-6 pr-4">
                                <h4 className="font-semibold">Photography</h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div> */}

        </section>
    )
}