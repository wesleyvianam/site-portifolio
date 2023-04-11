import {BsBook} from 'react-icons/bs';

export default function Education() {
    return (
        <>
            <div className="mx-7 flex items-center">
                <div className="bg-gradient-card rounded-lg">
                    <div className="p-3 rounded-lg bg-[#202022]">
                        <BsBook className=""/>
                    </div>
                </div>
                <h2 className="font-semibold text-2xl">Education</h2>
            </div> 
            <ol className="mb-8 ml-3">              
                <li className="pb-12 ml-4 relative border-l border-[#383838] dark:border-gray-700 left-5 p-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Tecnólogo Análise e Desenvolvimento de Sistemas</h3>
                        <small className="text-gold-color text-base">Universidade Estácio - 2021/2023</small>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
                <li className="ml-4 relative bottom-5 left-5 px-6">
                    <div className="absolute w-3 h-3 bg-gold-color rounded-full mt-1.5 -left-1.5 border-2 border-[#383838] dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="pb-2">
                        <h3 className="font-semibold text-lg">Pós Graduação Engenharia de Software</h3>
                        <small className="text-gold-color text-base">Universidade Estácio - 2023/2024</small>
                    </div>
                    <p>Lorem ipsumconsectetur adipisicing elit. Facere nam, eum vero hic id doloremque iste quasi error ipsa facilis.</p>
                </li>
            </ol>
        </>
    )
}