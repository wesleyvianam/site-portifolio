import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="p-8 h-full flex flex-col justify-center items-center">
      <h1 className="text-9xl text-gold-color">404</h1>

      <span className="text-4xl pb-3 text-gold-color">PAGE NOT FOUND</span>

      <div className="bg-gradient-card rounded-lg mr-2">
        <button onClick={() => navigate(-1)} className="bg-[#202022] px-2 py-1 rounded-lg">
          {'< Voltar'}
        </button>
      </div>
    </div>
  )
}