import React from "react";
import project from "../../../Data/data.json"; 
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
        <ul className="grid grid-cols-3 gap-4 mt-6">
            {
                list.length === 0 
                    ? "Não há nenhum projeto em "
                    : ""
            }

            {list.map(item => (
                <Project key={item.id} {...item} />
            ))}
        </ul>
    )
}