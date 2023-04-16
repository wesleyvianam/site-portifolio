import { useNavigate } from 'react-router-dom';
import { TProject } from '../../../../Types/index';

export default function Project(props: TProject) {
  const {id, title, image, descricao} = props
  const navigate = useNavigate()

  return (
    <li>
      <button type='button' 
        onClick={() => navigate(`/project/${id}`)} 
        className="rounded-lg relative">
        
        <figure>
          <img src={image} alt={title} className="rounded-lg h-[191px]" />
        </figure>

        <div className='absolute bottom-0 w-full'>
          <h2 className='font-medium p-2 bg-[#0000009c] rounded-b-lg'>{title}</h2>
        </div>
      </button>
    </li>
  )
}