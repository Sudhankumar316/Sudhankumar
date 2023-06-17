import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Home.css';
import sudhan from '../images/SUDHANKUMAR.jpg';

function Home() {

  // const {text} = useTypewriter({
  //   words : ["Developer", "UI/UX Designer", "Programmer"],
  //   loop : {},

  // });
  return (
    // <div className='home '>
    //   <div className='about row'>
    //     <img src={sudhan} alt='sudhan' className='col-3'></img>
    //     <div className='col-8'>
    //       <h2> Hi, This is SUDHANKUMAR</h2>
    //       <div className='prompt'>
    //         <p>A Fornt-End Developer with passion for learning and creating</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='home'>
      <div className='about row'>
        <img src={sudhan} alt='sudhan' className='col-3'></img>
        <div className='col-8'>
          <h2> I'm a {'<'}
            <span>
              <Typewriter 
                words= {["Front-End Developer", "UI/UX Designer", "Programmer"]}
                loop= {true}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>{' />'} 
            </h2>
          <h6> Hi, This is SUDHANKUMAR with passion of learning and apply it in real world problems.
              I am quite good in programming and I'm more intrested in "CyberSecurity & Ethical-Hacking".
              As a learning model I give my best accuracy rate of outcome. 
              To improve my efficiency, I train myself that what I have learnt and what I am going to learn.
          </h6>
          <div className='socialMedia my-5'>
            <a href='https://www.linkedin.com/in/sudhankumar-r-6ba5b9243/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin fa-xl"></i></a>
            <a href='mailto: sudhankumarravindhran@gmail.com' target='_blank' rel='noreferrer'><i class="fa-solid fa-envelope fa-xl"></i></a>
            <a href='https://github.com/Sudhankumar316' target='_blank' rel='noreferrer'><i class="fa-brands fa-github fa-xl"></i></a>
            <a href='https://www.facebook.com/josweety.jothi/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook fa-xl" ></i></a>
            <a href='https://drive.google.com/drive/folders/1KGpkZ8oQSDPgSMokerbX96uObBYP1drR?usp=share_link' target='_blank' rel='noreferrer'><button className='btn btn-outline-light mb-2 mx-3'> Resume</button></a>
            {/* <span><i class="fa-regular fa-file fa-xs"></i>Resume</span> */}
        </div>
       </div>
      </div>
    </div>
  );
}

export default Home
