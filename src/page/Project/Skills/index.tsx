import {GiElephant} from 'react-icons/gi'
import {FaSymfony, FaLaravel, FaJava} from 'react-icons/fa'
import {SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiSass, SiStyledcomponents, SiNodedotjs} from 'react-icons/si'
import Icon from '../../../Components/Icon';

export interface ITechnology {
  id: number;
  label: string;
}

export default function Skills({technologies}: any) {

  return (
    <div className='pt-8'>
      <h2 className='pb-3 font-bold text-xl text-gold-color'>Skills Used</h2>

      <ul className="grid grid-cols-3 gap-4">
        
        {technologies.map((item: ITechnology) => (
          <li className="bg-gradient-card rounded-xl">
            <div className="bg-[#202022] rounded-xl p-5 flex items-center">
        
              <Icon label={item.label} />
    
              <span key={item.id}>{item.label}</span>
              
            </div>
          </li>
        ))}

      </ul>
    </div>
  )
}