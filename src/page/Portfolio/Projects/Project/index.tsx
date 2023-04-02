import { useNavigate } from 'react-router-dom';
import { TProject } from '../../../../Types/index';

export default function Project(props: TProject) {
    const {id, title, image, descricao} = props
    const navigate = useNavigate()

    return (
      <li>
          <button type='button' onClick={() => navigate(`/project/${id}`)}>
            <img src={image.img1} alt={title} className="rounded-xl hover:scale-105 duration-500" />
            <h2 className='font-medium'>{title}</h2>
          </button>
      </li>
    )
}