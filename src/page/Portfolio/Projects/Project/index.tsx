import { useNavigate } from 'react-router-dom';
import { TProject } from '../../../../Types/index';

export default function Project(props: TProject) {
  const {id, title, image, descricao} = props
  const navigate = useNavigate()

  return (
    <li>
      <button type='button' 
        onClick={() => navigate(`/project/${id}`)} 
        className="rounded-xl flex items-center h-[191px] bg-white">
        
        <figure>
          <img src={image} alt={title} className="rounded-lg" />
        </figure>
      </button>
        
      <div className=''>
        <h2 className='font-medium'>{title}</h2>
      </div>
    </li>
  )
}