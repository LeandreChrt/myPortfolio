import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function Projets({ Language, Text, changActive }) {

    const [Projects, setProjects] = useState([])

    useEffect(() => {
        changActive(1)
        setProjects(Text.projets);  
    }, [])
    return (
        <div>
            {Projects[0] === undefined ? <h1>Loading</h1> : Projects.map(projet => <h1>{projet.titre[Language]}</h1>)}
        </div>
    )
}