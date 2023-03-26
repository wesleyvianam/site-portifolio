import avatar from '../../assets/image/profile.jpg';
import {FiMail} from 'react-icons/fi';
import {BsPhone, BsCalendar3, BsInstagram} from 'react-icons/bs';
import {SlLocationPin} from 'react-icons/sl';
import {TbBrandLinkedin} from 'react-icons/tb';
import {FiYoutube} from 'react-icons/fi'

export default function Profile() {
    return (
        <aside className='py-14 border-2 border-[#383838] px-8 bg-[#1e1e1f] rounded-3xl mr-4 w-[20rem] sticky'>
            
            <div>
                <figure className="flex justify-center">
                    <img src={avatar} className="rounded-3xl" width={180}/>
                </figure>

                <div className='flex flex-col items-center'>
                    <h1 className="py-4 font-medium text-xl">Wesley Viana Martins</h1>

                    <p className='text-sm rounded-md bg-[#2b2b2c] w-[9.8rem] px-2'>Full Stack Developer</p>
                </div>
            </div>

            <div className="">

                <div className='my-8 border-[#383838] border-b'></div>

                <ul>
                    <li className='flex mb-8'>
                        <div className='p-[1px] bg-gradient-to-tl from-[#1e1e1f] to-white rounded-lg mr-2'>
                            <div className='bg-[#1e1e1f] p-[13px] rounded-lg'>
                                <FiMail className='text-[#ffdb70]' />
                            </div>
                        </div>
                        <div>
                            <span>EMAIL</span>
                            <p className='text-sm'>wesleyviana@vivaldi.net</p>
                        </div>
                    </li>
                    <li className='flex mb-8'>
                        <div className='p-[1px] bg-gradient-to-tl from-[#1e1e1f] to-white rounded-lg mr-2'>
                            <div className='bg-[#1e1e1f] p-[13px] rounded-lg'>
                                <BsPhone className='text-[#ffdb70]' />
                            </div>
                        </div>
                        <div>
                            <span>PHONE</span>
                            <p className='text-sm'>(38) 9 9119-8109</p>
                        </div>
                    </li>
                    <li className='flex mb-8'>
                        <div className='p-[1px] bg-gradient-to-tl from-[#1e1e1f] to-white rounded-lg mr-2'>
                            <div className='bg-[#1e1e1f] p-[13px] rounded-lg'>
                                <BsCalendar3 className='text-[#ffdb70]' />
                            </div>
                        </div>
                        <div>
                            <span>BIRTHDAY</span>
                            <p className='text-sm'>June 16, 2001</p>
                        </div>
                    </li>
                    <li className='flex mb-8'>
                        <div className='p-[1px] bg-gradient-to-tl from-[#1e1e1f] to-white rounded-lg mr-2'>
                            <div className='bg-[#1e1e1f] p-[13px] rounded-lg'>
                                <SlLocationPin className='text-[#ffdb70]' />
                            </div>
                        </div>
                        <div>
                            <span>LOCATION</span>
                            <p className='text-sm'>Contagem MG, Brasil</p>
                        </div>
                    </li>
                </ul>

                <ul className='flex justify-center items-center text-[#d6d6d6b3]'>
                    <li>
                        <a href="#">
                            <TbBrandLinkedin size={20}/>
                        </a>
                    </li>
                    <li className='mx-3'>
                        <a href="#">
                            <FiYoutube size={22}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsInstagram size={16}/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </aside>
    )
}