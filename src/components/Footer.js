import React from 'react';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer className='footer'>
        <div className='socialMedia'>
            <i class="fa-brands fa-linkedin fa-xl"></i>
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-solid fa-envelope fa-xl"></i>
            <i class="fa-brands fa-github fa-xl"></i>
        </div>
        <p>&copy; 2023</p>
    </footer>
  );
}

export default Footer