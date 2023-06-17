import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar1() {

  const [expandNavbar,setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    setExpandNavbar(false);
  },[location])
    
  return (
    <div class="navbar navbar-dark bg-dark navbar-expand-md py-3 px-3" id={expandNavbar ? "open" : "close"}>
        <Link to='/' className='navbar-brand h1'> <i class="fa-solid fa-id-badge fa-xl" style={{color: "#f0f2f5;"}}></i> Portfolio</Link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" onClick={()=>{
                setExpandNavbar((prev) => !prev);
            }}>

            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse mr-0 " id="navbar" style={{justifyContent: 'flex-end'}}>
            <div className='navbar-nav'>
              <Link to='/' className='nav-link mx-3'>Home</Link>
              <Link to='/Projects' className='nav-link mx-3'>Projects</Link>
              <Link to='/Skills' className=' nav-link mx-3'>Skills</Link> 
              <Link to='/Contact' className='nav-link mx-3'>Contact</Link> 
            </div>
        </div>
    </div>

  )
}

export default Navbar1