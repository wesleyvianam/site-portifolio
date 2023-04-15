import {GiElephant} from 'react-icons/gi'
import {FaSymfony, FaLaravel, FaJava} from 'react-icons/fa'
import {SiSpring, SiMongodb, SiExpress, SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiSass, SiStyledcomponents, SiNodedotjs } from 'react-icons/si'
import {TbBrandBootstrap, TbBrandHtml5, TbBrandCss3} from 'react-icons/tb'
import {VscJson} from 'react-icons/vsc'

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
    },
    {
      "id": 'Bootstrap',
      "icon": <TbBrandBootstrap className='text-3xl mr-3' />
    },
    {
      "id": 'HTML',
      "icon": <TbBrandHtml5 className='text-3xl mr-3' />
    },
    {
      "id": 'Express',
      "icon": <SiExpress className='text-3xl mr-3' />
    },
    {
      "id": 'JSON',
      "icon": <VscJson className='text-3xl mr-3' />
    },
    {
      "id": 'MongoDB',
      "icon": <SiMongodb className='text-3xl mr-3' />
    },
    {
      "id": 'CSS',
      "icon": <TbBrandCss3 className='text-3xl mr-3' />
    },
    {
      "id": 'Spring Boot',
      "icon": <SiSpring className='text-3xl mr-3' />
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