import {BsBook} from 'react-icons/bs';

export default function Experience() {
    return (
        <>
            <div className="mx-7 flex items-center">
                <div className="bg-gradient-card rounded-lg">
                    <div className="p-3 rounded-lg bg-[#202022]">
                        <BsBook className=""/>
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">Experience</h2>
            </div>  
            <ol className="mb-8 ml-3">              
                <li className="pb-1 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                        <small className="text-gold-color text-base">Dzenvolve Soluções Estratégicas - 02/2023 - Present</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="pb-12 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                        <small className="text-gold-color text-base">DFranquias - 10/2021 a 9/2020</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="ml-4 relative bottom-5 left-5 px-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Estagiário</h3>
                        <small className="text-gold-color text-base">Intituto Nacional de Seguro Social   09/2017 - 09/2019</small>
                    </div>
                    <p>Lorem ipsum dolor sit elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
            </ol>
        </>
    )
}