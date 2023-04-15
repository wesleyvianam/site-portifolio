import React from "react";
import tag from "../../../Data/tag.json";
import {TTag} from "../../../Types";

interface IFilter {
  filtro: string | null;
  setFiltro: React.Dispatch<React.SetStateAction<string | null>>
}

interface IOption {
  id: string;
}

export default function Filter({ filtro, setFiltro }: IFilter) {
  
  function selectTag(option: TTag) {
    if (filtro === option.id) return setFiltro(null);
    return setFiltro(option.id);
  }

  return (
    <ul className="flex">
      {tag.map((option, index) => (
        <li key={index} className="mx-1 py-1 px-2 bg-[#282828] rounded-xl">
          <button onClick={() => selectTag(option)} 
            className={filtro == option.id 
              ? "text-gold-color" 
              : "" }>
            {option.id}
          </button>
        </li>
      ))}
    </ul>
  )
}