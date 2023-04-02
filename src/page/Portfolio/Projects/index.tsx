import React from "react";
import project from "../../../Data/data.json"; 
import Project from "./Project";

interface Props {
    filtro: number | null
}

export default function Projects({filtro}: Props) {
    const [list, setList] = React.useState(project)

    function testFilter(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
    }

    React.useEffect(() => {
        const newList = project.filter(item => testFilter(item.tags.id))
        setList(newList);
    }, [filtro])

    return (
        <ul className="grid grid-cols-3 gap-4 mt-6">
            {list.map(item => (
                <Project key={item.id} {...item} />
            ))}
        </ul>
    )
}