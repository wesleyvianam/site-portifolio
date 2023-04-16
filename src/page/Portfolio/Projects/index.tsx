import React from "react";
import project from "../../../Data/project.json"; 
import Project from "./Project";

interface Props {
    filtro: string | null
}

export default function Projects({filtro}: Props) {
    const [list, setList] = React.useState(project)

    function testFilter(id: string) {
        if(filtro !== null) return filtro === id;
        return true;
    }

    React.useEffect(() => {
        const newList = project.filter(item => testFilter(item.tags.id))
        setList(newList);
    }, [filtro])
    
    return (
        <>
            {
                list.length === 0 
                    ? 
                        <div className="h-[300px] flex justify-center items-center">
                            <span>
                                Não há nenhum projeto na categoria <strong className="text-gold-color">{filtro}</strong>
                            </span>
                        </div>
                    : ""
            }

            <ul className="grid grid-cols-3 gap-4 mt-6">

                {list.map(item => (
                    <Project key={item.id} {...item} />
                ))}
            </ul>
        </>
    )
}