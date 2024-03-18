import projects  from "../data/projects";
import {Link}  from 'react-router-dom';

const Projects = () =>{
    return(
        <>
        <div className="containerProjects">
            <h3>Projects</h3>
            {projects.map((project) => (
          <li key={project.id}>{project.name}
          <div className="divProject">
            <img src={project.image} alt={`Project Image for ${project.name}`} width="100px"/>
            <p>{project.description}</p>
            <a href={project.url} target="_blank">Project Link</a>
          </div>
          </li>
        ))}
        </div>
        <div className="divLink">
            <Link to="/">Return to Home</Link>
            <br/>
            <Link to="/resume">Go to Resume</Link>
        </div>
        </>
    )
}
export  default Projects;