import React from 'react';
import '../styles/WordCounter.css';
import { useState, useEffect } from "react";

function WordCounter() {
    
    const [text, setText] = useState('');

    const [wordCount, setWordCount] = useState(0);

    const changeHandler = (event)=>{
        setText(event.target.value);
    };
    useEffect(()=>{
        const words=text.split(" ");
        let wordCount = 0;
        words.forEach((word)=>{
            if(word.trim() !==''){
                wordCount++;
            }
        });
        setWordCount(wordCount);
    },[text]) 
    
  return (
    <div className='wordcounter mx-auto'>
        <h2 className='my-4'>Responsive Paragraph Word Counter</h2>
        <textarea value={text} onChange={changeHandler} rows={10} className='input-group form-control mx-auto my-4'></textarea>
        <h4>Word Count: {wordCount}</h4>
    </div>
  )
}

export default WordCounter