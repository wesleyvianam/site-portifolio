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

        <div>
          <img src={project.image} className="rounded-xl w-[100%]"/>
        </div>

      <div className="pt-8">
        <h2 className='pb-3 font-bold text-xl text-gold-color'>About the Project</h2>
        
        <p>{project.descricao}</p>

      </div>  

      <Skills technologies={project.technologies}/>
    </div>
  )
}