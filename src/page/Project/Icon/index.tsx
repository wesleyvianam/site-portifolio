import {GiElephant} from 'react-icons/gi'
import {FaSymfony, FaLaravel, FaJava} from 'react-icons/fa'
import {SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiSass, SiStyledcomponents, SiNodedotjs} from 'react-icons/si'

interface ILabel {
  label: string
}

export default function Icon({label}: ILabel) {
  const arr: any = [
    {
      "id": 'Symfony',
      "icon": <FaSymfony className='text-3xl mr-3' />,
    },
    {
      "id": 'Laravel',
      "icon": <FaLaravel className='text-3xl mr-3' />
    },
    {
      "id": 'PHP',
      "icon": <GiElephant className='text-3xl mr-3' />,
    },
    {
      "id": 'Java',
      "icon": <FaJava className='text-3xl mr-3' />,
    },
    {
      "id": 'TypeScript',
      "icon": <SiTypescript className='text-3xl mr-3' />,
    },
    {
      "id": 'React',
      "icon": <SiReact className='text-3xl mr-3' />,
    },
    {
      "id": 'JavaScript',
      "icon": <SiJavascript className='text-3xl mr-3' />,
    },
    {
      "id": 'TailWind CSS',
      "icon": <SiTailwindcss className='text-3xl mr-3' />,
    },
    {
      "id": 'Sass',
      "icon": <SiSass className='text-3xl mr-3' />,
    },
    {
      "id": 'Styled Components',
      "icon": <SiStyledcomponents className='text-3xl mr-3' />,
    },
    {
      "id": 'Node',
      "icon": <SiNodedotjs className='text-3xl mr-3' />,
    }
  ];
  
  return (
    <h1>
      {arr.map((item: any) => {
        return item.id == label ? item.icon : ""
      })}
    </h1>
  )
}