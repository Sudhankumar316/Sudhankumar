import React from 'react';
import '../styles/Projects.css'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className='projects mx-auto'>
      <h1 className='m-5 text-light'>{'<'}My Personal projects{' />'}</h1>
      <div className='projectList'>
        {ProjectList.map((project)=>{
          return <ProjectItem link={project.link} name={project.name} image={project.image}/>
        })}
      </div>

    </div>
  )
}

export default Projects