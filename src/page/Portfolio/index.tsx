import React from "react";
import Navbar from "../../Components/Navbar";
import Projects from "./Projects";
import Filter from "./Filter";

export default function Portfolio() {
  const [filtro, setFiltro] = React.useState<string | null>(null);

  return (
    <div>
      <Navbar children={'Portfolio'} />
      <div className="px-8">
        <Filter filtro={filtro} setFiltro={setFiltro} />
                    
        <Projects filtro={filtro} />
      </div>
    </div>
  )
}