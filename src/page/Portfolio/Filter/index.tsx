import React from "react";
import tag from "../../../Data/tag.json";
import {TTag} from "../../../Types";

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

interface option {
  id: number;
  label: string;
}

export default function Filter({ filtro, setFiltro }: Props) {
  
  function selectTag(option: TTag) {
    if (filtro === option.id) return setFiltro(null);
    return setFiltro(option.id);
  }

  return (
    <ul className="flex">
      {tag.map((option) => (
        <li key={option.id} className="mx-1 py-1 px-2 bg-[#282828] rounded-xl">
          <button onClick={() => selectTag(option)} 
            className={filtro == option.id 
              ? "text-gold-color" 
              : "" }>
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  )
}