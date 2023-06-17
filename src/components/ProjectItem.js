import React from 'react';
import { useNavigate} from "react-router-dom";

function ProjectItem({ image, name, link }) {
  
  const navigate = useNavigate();

  const handleClick = ()=>{
    if(name === "React Calculator"){
      window.open(link);
      // window.location.href._blank = link;
      
    }
    else{navigate("../"+ link);}
  }

  
    return (
    <div className='projectItem' onClick={handleClick}>
        <div style={ {backgroundImage: `url(${image})`} } className='bgImage' />
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem