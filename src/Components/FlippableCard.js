import React from 'react'
import { useState } from 'react';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const FlippableCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  //https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  
  const [touchStartY, setTouchStartY] = useState(null)
  const [touchEndY, setTouchEndY] = useState(null)

  const minSwipeDistance = 50 

  function onTouchStart(e) {
      setTouchEndX(null)
      setTouchStartX(e.targetTouches[0].clientX)

      setTouchEndY(null)
      setTouchStartY(e.targetTouches[0].clientY)
  }

  function onTouchMove(e) {
      setTouchEndX(e.targetTouches[0].clientX)
      setTouchEndY(e.targetTouches[0].clientY)
  }

  function onTouchEnd() {
      if (touchStartX && touchEndX) swipeHorizontal();
  }

  function swipeHorizontal() {

    const xDistance = touchStartX - touchEndX
    const yDistance = touchStartY - touchEndY
    if (Math.abs(yDistance) >= Math.abs(xDistance)) {
        return;
    }

    const isLeftSwipe = xDistance > minSwipeDistance
    const isRightSwipe = xDistance < -minSwipeDistance

    if (isLeftSwipe ) {
      setIsFlipped(prev => !prev);
    }

    if (isRightSwipe ) {
      setIsFlipped(prev => !prev);
    }
}

  return (
    <>
      <div className={`flippableCardContainer ${isFlipped ? 'isFlipped' : ''}`} 
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className='card'>
          <FrontCard/>
          <BackCard/>
        </div>
      </div>
      {/* <br/>
      <button onClick={(e) => { 
          e.preventDefault();  
          setIsFlipped(prev => !prev);
        }
      }>
        FLIP!
      </button> */}

    </>
  )
}

export default FlippableCard