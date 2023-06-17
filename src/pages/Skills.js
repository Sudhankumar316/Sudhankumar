import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className='container-fluid skillsbg'>
      <h1 className='m-4 mx-auto text-light'>{'<'}Technical Skills{' />'}</h1>
      <div className="skills mx-auto">
      
        <div className='skill-box'>
          <span className='title'>HTML</span>
          <div className='skill-bar'>
            <span className='skill-per html'>
              <span className='tip' >90</span>
            </span>
          </div>

          <span className='title'>CSS</span>
          <div className='skill-bar'>
            <span className='skill-per css'>
              <span className='tip' >70</span>
            </span>
          </div>

          <span className='title' >Bootstrap</span>
          <div className='skill-bar'>
            <span className='skill-per bootstrap'>
              <span className='tip' >50</span>
            </span>
          </div>

          <span className='title' >JavaScript</span>
          <div className='skill-bar'>
            <span className='skill-per javascript'>
              <span className='tip' >60</span>
            </span>
          </div>

          <span className='title' >JAVA</span>
          <div className='skill-bar'>
            <span className='skill-per java'>
              <span className='tip' >80</span>
            </span>
          </div>

          <span className='title'>C Language</span>
          <div className='skill-bar'>
            <span className='skill-per c'>
              <span className='tip'>40</span>
            </span>
          </div>

          <span className='title'>PHP</span>
          <div className='skill-bar'>
            <span className='skill-per php'>
              <span className='tip' >30</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills