import React from 'react';
import '../styles/AgeCalculator.css';

function AgeCalculator() {
    const date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth()+1;
    let currentYear = date.getFullYear();
    return (
    <div className='agecalculator mx-auto' >
        <h3 className='mb-5'>Enter your Date of Birth to find your age</h3>
        <input type='date' id='age' name='age' className='input-group date form-control my-3'/>
        <button className='btn btn-primary my-3' onClick={()=>{
            let age = document.getElementById('age').value;
            let ageYear = age.substring(0,4);
            let ageMonth = age.substring(5,7);
            let ageDate = age.substring(8,age.length);
            if(age===""){
                document.getElementById('result').innerHTML="";
            }
            else if((currentYear-ageYear)===1 && ((currentMonth-ageMonth)<0 ||(currentDate-ageDate)<0)){
                document.getElementById('result').innerHTML=`<h4>Your are 0 years old</h4>`;
            }
            else if((currentYear-ageYear)<=0 && ((currentMonth-ageMonth)<=0 || (currentDate-ageDate)<=0)){
                document.getElementById('result').innerHTML=`<h4>Your DOB not exceed the current date</h4>`;
            }
            
            else{
                document.getElementById('result').innerHTML=`<h4>Your are ${currentYear-ageYear} years old</h4>`;
            }
        }}>Calculate age</button>
        <p id="result"></p>
    </div>
  )
}

export default AgeCalculator