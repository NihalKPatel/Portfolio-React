import React from "react";
import data from "./data.json";
import Card from "./Card"
import "./project.css";
import Spacer from "react-spacer";

function Projects(props) {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "0"
    };

    const projects = [];

    for (let i=0 ; i <= Math.ceil((6 - 1) / 3); i++)
    {
        const temp = [];
        for (let k = i*3; k < (i*3)+3; k++)
        {
            if (data[k] === undefined){
                break;
            }
            temp.push(<Card data={data[k]}/>)
        }
        if (temp.length === 0){
            break;
        }
        projects[i] = temp
    }

    return (
        <div>
            {
                projects.map(function (name, index) {
                    return <div style={divStyle} key={index.toString()}> {projects[index]}
                    </div>
                })
            }
            }
        </div>

    )

}

export default Projects;

