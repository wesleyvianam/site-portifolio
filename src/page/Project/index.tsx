import { useNavigate, useParams } from "react-router-dom"
import listProject from "../../Data/data.json"
import Skills from "./Skills";
import {BsGithub} from "react-icons/bs";

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = listProject.find(item => item.id === Number(id));
  if (!project) {
      return <h1>Não encontrado</h1>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between pb-3">
        <h1 className="text-2xl font-bold">
          {project.title}
          <a href={project.repository} target="_blank" className="pt-1 flex items-center text-gold-color text-sm">
            <BsGithub className="text-lg mr-1" />
            Project in Github
          </a>
        </h1>
        <button className="text-gold-color" onClick={() => navigate(-1)}>
            {'< Voltar'}
        </button>
      </div>

      <div className="container mx-auto">
        <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
            <div className="w-full col-span-2 row-span-2">
                <img src={project.image.img1} className="rounded-xl"/>
            </div>
            <div className="w-full">
                <img src={project.image.img2} className="rounded-xl"/>
            </div>
            <div className="w-full">
                <img src={project.image.img3} className="rounded-xl"/>
            </div>
          </div>
      </div>

      <div className="pt-8">
        <h2 className='pb-3 font-bold text-xl text-gold-color'>About the Project</h2>
        
        <p>{project.descricao}</p>

      </div>  

      <Skills technologies={project.technologies}/>
    </div>
  )
}