import React from 'react'
import { useState } from 'react';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const FlippableCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <button onClick={(e) => { 
          e.preventDefault();  
          setIsFlipped(prev => !prev);
        }
      }>
        FLIP!
      </button>

      <br/>

      <div className={`flippableCardContainer ${isFlipped ? 'isFlipped' : ''}`}>
        <div className='card'>
          <FrontCard/>
          <BackCard/>
        </div>
      </div>


    </>
  )
}

export default FlippableCard